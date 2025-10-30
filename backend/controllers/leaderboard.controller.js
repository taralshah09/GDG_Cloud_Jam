import User from "../models/users.models.js";
import Config from "../models/config.models.js";

class LeaderboardController {
  // Get current week number
  async getCurrentWeek() {
    try {
      const startDate = await Config.getProgramStartDate();
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 7) return 1;
      if (diffDays <= 14) return 2;
      if (diffDays <= 21) return 3;
      if (diffDays <= 28) return 4;
      return 4;
    } catch (error) {
      return 1;
    }
  }

  // GET leaderboard with filters
  async getLeaderboard(req, res) {
    try {
      const { house, week } = req.query;

      let query = {};
      let sortCriteria = {};

      // Filter by house if specified
      if (house && house !== "all") {
        const houseId = parseInt(house);
        if (houseId >= 1 && houseId <= 7) {
          query.house_id = houseId;
        } else {
          return res.status(400).json({
            success: false,
            message: "Invalid house ID. Must be between 1 and 7",
          });
        }
      }

      // Determine sorting based on week filter
      if (week && week !== "all") {
        const weekNum = parseInt(week);
        if (weekNum >= 1 && weekNum <= 4) {
          const weekKey = `week${weekNum}`;
          // Week fields already contain incremental progress, so just sort by them
          sortCriteria = {
            [`${weekKey}.total_completed`]: -1,
            [`${weekKey}.badges_completed`]: -1,
            [`${weekKey}.labs_completed`]: -1,
            progressReachedAt: 1, // Earlier achievers rank higher
            lastUpdated: 1, // Fallback for deterministic ordering
          };
        } else {
          return res.status(400).json({
            success: false,
            message: "Invalid week number. Must be between 1 and 4",
          });
        }
      } else {
        // Sort by overall totals with timestamp tie-breaking
        sortCriteria = {
          badges_completed: -1,
          labs_completed: -1,
          progressReachedAt: 1, // Earlier achievers rank higher
          lastUpdated: 1, // Fallback for deterministic ordering
        };
      }

      // Fetch users

      const users = await User.find(query)
        .sort(sortCriteria)
        .select("-__v")
        .lean();

      // Add rank and total_completed to each user
      const leaderboard = users.map((user, index) => {
        const total_completed = user.badges_completed + user.labs_completed;

        // If filtering by week, include week-specific data
        let weekData = null;
        if (week && week !== "all") {
          const weekKey = `week${week}`;
          weekData = user[weekKey];
        }

        return {
          rank: index + 1,
          ...user,
          total_completed,
          ...(weekData && { week_data: weekData }),
        };
      });

      const currentWeek = await this.getCurrentWeek();

      res.json({
        success: true,
        data: {
          leaderboard,
          currentWeek,
          filters: {
            house: house || "all",
            week: week || "all",
          },
          count: leaderboard.length,
        },
      });
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch leaderboard",
        error: error.message,
      });
    }
  }

  // GET house-wise statistics
  async getHouseStats(req, res) {
    try {
      const houses = [];

      for (let houseId = 1; houseId <= 7; houseId++) {
        const users = await User.find({ house_id: houseId }).lean();

        const stats = {
          house_id: houseId,
          total_members: users.length,
          total_badges: users.reduce(
            (sum, user) => sum + user.badges_completed,
            0
          ),
          total_labs: users.reduce((sum, user) => sum + user.labs_completed, 0),
          average_badges:
            users.length > 0
              ? (
                  users.reduce((sum, user) => sum + user.badges_completed, 0) /
                  users.length
                ).toFixed(2)
              : 0,
          average_labs:
            users.length > 0
              ? (
                  users.reduce((sum, user) => sum + user.labs_completed, 0) /
                  users.length
                ).toFixed(2)
              : 0,
        };

        houses.push(stats);
      }

      // Sort by total completions
      houses.sort(
        (a, b) =>
          b.total_badges + b.total_labs - (a.total_badges + a.total_labs)
      );

      res.json({
        success: true,
        data: houses,
      });
    } catch (error) {
      console.error("Error fetching house stats:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch house statistics",
        error: error.message,
      });
    }
  }

  // GET user details by email
  async getUserByEmail(req, res) {
    try {
      const { email } = req.params;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }

      const user = await User.findOne({ email: email.toLowerCase() }).lean();

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Calculate rank with proper tie-breaking
      const higherBadges = await User.countDocuments({
        badges_completed: { $gt: user.badges_completed },
      });

      const sameBadgesHigherLabs = await User.countDocuments({
        badges_completed: user.badges_completed,
        labs_completed: { $gt: user.labs_completed },
      });

      const sameBadgesSameLabsEarlier = await User.countDocuments({
        badges_completed: user.badges_completed,
        labs_completed: user.labs_completed,
        progressReachedAt: { $lt: user.progressReachedAt },
      });

      const rank =
        higherBadges + sameBadgesHigherLabs + sameBadgesSameLabsEarlier + 1;

      const total_completed = user.badges_completed + user.labs_completed;

      res.json({
        success: true,
        data: {
          ...user,
          rank,
          total_completed,
        },
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch user details",
        error: error.message,
      });
    }
  }

  // GET weekly leaderboard comparison
  async getWeeklyComparison(req, res) {
    try {
      const currentWeek = await this.getCurrentWeek();
      const weeklyData = [];

      for (let week = 1; week <= currentWeek; week++) {
        const weekKey = `week${week}`;

        // Week fields already contain incremental progress, just sort by them
        const topUsers = await User.find()
          .sort({
            [`${weekKey}.total_completed`]: -1,
            [`${weekKey}.badges_completed`]: -1,
            [`${weekKey}.labs_completed`]: -1,
            progressReachedAt: 1,
            lastUpdated: 1,
          })
          .limit(10)
          .select(`name email ${weekKey} progressReachedAt`)
          .lean();

        weeklyData.push({
          week,
          topUsers: topUsers.map((user, index) => ({
            rank: index + 1,
            name: user.name,
            email: user.email,
            ...user[weekKey],
            progressReachedAt: user.progressReachedAt,
          })),
        });
      }

      res.json({
        success: true,
        data: {
          currentWeek,
          weeks: weeklyData,
        },
      });
    } catch (error) {
      console.error("Error fetching weekly comparison:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch weekly comparison",
        error: error.message,
      });
    }
  }

  async getAllComplete(req, res) {
    try {
      // Fetch only users who have completed all 20 (badges + labs)
      const users = await User.find({
        $expr: {
          $eq: [{ $add: ["$badges_completed", "$labs_completed"] }, 20],
        },
      })
        .sort({
          progressReachedAt: 1, // earlier achievers first
          lastUpdated: 1, // deterministic tie-breaking
        })
        .select("-__v")
        .lean();

      // Add rank and total_completed
      const leaderboard = users.map((user, index) => ({
        rank: index + 1,
        ...user,
        total_completed: user.badges_completed + user.labs_completed,
      }));

      res.json({
        success: true,
        data: {
          leaderboard,
          filters: {
            completed: 20,
          },
          count: leaderboard.length,
        },
      });
    } catch (error) {
      console.error(
        "Error fetching participants with all labs completed:",
        error
      );
      res.status(500).json({
        success: false,
        message: "Failed to fetch participants with all labs completed",
        error: error.message,
      });
    }
  }
}

export default new LeaderboardController();
