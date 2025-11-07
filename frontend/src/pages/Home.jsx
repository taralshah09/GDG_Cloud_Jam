import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHouseStats, getCurrentWeek, getLeaderboard } from '../services/api';
import './Home.css';

function Home() {
  const [stats, setStats] = useState({
    totalParticipants: 0,
    totalBadges: 0,
    totalLabs: 0,
    currentWeek: 1
  });
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch house stats
      const houseRes = await getHouseStats();
      const houses = houseRes.data.data;
      
      // Calculate totals
      const totalParticipants = houses.reduce((sum, h) => sum + h.total_members, 0);
      const totalBadges = houses.reduce((sum, h) => sum + h.total_badges, 0);
      const totalLabs = houses.reduce((sum, h) => sum + h.total_labs, 0);
      
      // Get current week
      const weekRes = await getCurrentWeek();
      const currentWeek = weekRes.data.data.currentWeek;
      
      // Get top 5 users
      const leaderboardRes = await getLeaderboard('all', 'all');
      const top5 = leaderboardRes.data.data.leaderboard.slice(0, 5);
      
      setStats({
        totalParticipants,
        totalBadges,
        totalLabs,
        currentWeek
      });
      
      setTopUsers(top5);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="home-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Google Cloud Study Jams 2025</h1>
        <p className="hero-subtitle">Campus Leaderboard Challenge</p>
        <div className="week-badge">Week {stats.currentWeek} of 4</div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-value">{stats.totalParticipants}</div>
          <div className="stat-label">Participants</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-value">{stats.totalBadges}</div>
          <div className="stat-label">Skill Badges</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🎮</div>
          <div className="stat-value">{stats.totalLabs}</div>
          <div className="stat-label">Arcade Games</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏠</div>
          <div className="stat-value">7</div>
          <div className="stat-label">Houses</div>
        </div>
      </div>

      <div className="top-performers">
        <h2 className="section-title">🌟 Top Performers</h2>
        <div className="top-users-list">
          {topUsers.map((user, index) => (
            <div key={user._id} className="top-user-card">
              <div className="rank-badge">{index + 1}</div>
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-house">House {user.house_id}</div>
              </div>
              <div className="user-stats">
                <span className="badge-count">🏆 {user.badges_completed}</span>
                <span className="lab-count">🎮 {user.labs_completed}</span>
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/leaderboard" className="view-all-btn">
          View Full Leaderboard →
        </Link>
      </div>

      {/* <div className="quick-links">
        <Link to="/houses" className="quick-link-card">
          <div className="link-icon">🏠</div>
          <div className="link-title">House Rankings</div>
          <div className="link-desc">Compare house performance</div>
        </Link>
        
        <Link to="/weekly" className="quick-link-card">
          <div className="link-icon">📊</div>
          <div className="link-title">Weekly Progress</div>
          <div className="link-desc">Track week-by-week growth</div>
        </Link>
        
        <Link to="/leaderboard" className="quick-link-card">
          <div className="link-icon">📈</div>
          <div className="link-title">Full Leaderboard</div>
          <div className="link-desc">See all participants</div>
        </Link>
      </div> */}
    </div>
  );
}

export default Home;