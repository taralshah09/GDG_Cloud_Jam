import { useState, useEffect } from 'react';
import { getLeaderboard, getCurrentWeek } from '../services/api';
import './Leaderboard.css';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [filters, setFilters] = useState({
    house: 'all',
    week: 'all'
  });
  const [searchEmail, setSearchEmail] = useState('');

  const getHouseName = (houseId) => {
    const houseNames = {
      1: 'Alpha',
      2: 'Bravo', 
      3: 'Charlie',
      4: 'Delta',
      5: 'Enigma',
      6: 'Falcon',
      7: 'Gamma'
    };
    return houseNames[houseId] || `House ${houseId}`;
  };

  useEffect(() => {
    fetchCurrentWeek();
  }, []);

  useEffect(() => {
    fetchLeaderboard();
  }, [filters]);

  const fetchCurrentWeek = async () => {
    try {
      const res = await getCurrentWeek();
      setCurrentWeek(res.data.data.currentWeek);
    } catch (error) {
      console.error('Error fetching current week:', error);
    }
  };

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const res = await getLeaderboard(filters.house, filters.week);
      setLeaderboard(res.data.data.leaderboard);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleHouseChange = (e) => {
    setFilters({ ...filters, house: e.target.value });
  };

  const handleWeekChange = (e) => {
    setFilters({ ...filters, week: e.target.value });
  };

  // Get week-specific data for a user
  const getWeekData = (user) => {
    if (filters.week === 'all') {
      return {
        badges_completed: user.badges_completed,
        labs_completed: user.labs_completed,
        total_completed: user.total_completed
      };
    }
    
    const weekKey = `week${filters.week}`;
    const weekData = user[weekKey];
    
    return {
      badges_completed: weekData?.badges_completed || 0,
      labs_completed: weekData?.labs_completed || 0,
      total_completed: weekData?.total_completed || 0
    };
  };

  // Process and re-rank leaderboard based on selected week
  const processedLeaderboard = leaderboard.map(user => {
    const weekData = getWeekData(user);
    return {
      ...user,
      displayBadges: weekData.badges_completed,
      displayLabs: weekData.labs_completed,
      displayTotal: weekData.total_completed
    };
  }).sort((a, b) => b.displayTotal - a.displayTotal)
    .map((user, index) => ({
      ...user,
      displayRank: index + 1
    }));

  const filteredLeaderboard = processedLeaderboard.filter(user => 
    user.email.toLowerCase().includes(searchEmail.toLowerCase()) ||
    user.name.toLowerCase().includes(searchEmail.toLowerCase())
  );

  const getRankClass = (rank) => {
    if (rank === 1) return 'rank-gold';
    if (rank === 2) return 'rank-silver';
    if (rank === 3) return 'rank-bronze';
    return '';
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>🏆 Leaderboard</h1>
        <p className="subtitle">Track your progress and compete with peers</p>
        <p className="last-update">
          Last updated: 27/10/2025 02:21 PM
        </p>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <label>House</label>
          <select value={filters.house} onChange={handleHouseChange}>
            <option value="all">All Houses</option>
            <option value="1">Alpha</option>
            <option value="2">Bravo</option>
            <option value="3">Charlie</option>
            <option value="4">Delta</option>
            <option value="5">Enigma</option>
            <option value="6">Falcon</option>
            <option value="7">Gamma</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Week</label>
          <select value={filters.week} onChange={handleWeekChange}>
            <option value="all">All Weeks</option>
            {[1, 2, 3, 4].map(week => (
              <option 
                key={week} 
                value={week}
                disabled={week > currentWeek}
              >
                Week {week} {week > currentWeek ? '(Upcoming)' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group search-group">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading leaderboard...</div>
      ) : (
        <div className="leaderboard-table-container">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>House</th>
                <th>Badges</th>
                <th>Labs</th>
                <th>Total</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaderboard.length === 0 ? (
                <tr>
                  <td colSpan="7" className="no-data">
                    No participants found
                  </td>
                </tr>
              ) : (

                filteredLeaderboard.map((user) => (
                  <tr key={user._id} className={getRankClass(user.displayRank)}>
                    <td className="rank-cell">
                      <span className="rank-badge">{user.displayRank}</span>
                    </td>
                    <td className="name-cell">
                      <div className="user-name">{user.name}</div>
                      <div className="user-email">{user.email}</div>
                    </td>
                    <td>
                      <span className="house-badge">{getHouseName(user.house_id)}</span>
                    </td>
                    <td>
                      <span className="stat-badge badges">
                        🏆 {user.displayBadges}
                      </span>
                    </td>
                    <td>
                      <span className="stat-badge labs">
                        🎮 {user.displayLabs}
                      </span>
                    </td>
                    <td>
                      <span className="total-badge">
                        {user.displayTotal}
                      </span>
                    </td>
                    <td>
                      <a 
                        href={user.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="profile-link"
                      >
                        View →
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="leaderboard-footer">
        <p>Showing {filteredLeaderboard.length} participant(s)
          {filters.week !== 'all' && ` - Week ${filters.week} data`}
        </p>
      </div>
    </div>
  );
}

export default Leaderboard;