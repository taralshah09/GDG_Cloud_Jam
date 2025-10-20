import { useState, useEffect } from 'react';
import { getWeeklyComparison, getCurrentWeek } from '../services/api';
import './WeeklyProgress.css';

function WeeklyProgress() {
  const [weeklyData, setWeeklyData] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const [weeklyRes, currentWeekRes] = await Promise.all([
        getWeeklyComparison(),
        getCurrentWeek()
      ]);
      
      setWeeklyData(weeklyRes.data.data.weeks);
      setCurrentWeek(currentWeekRes.data.data.currentWeek);
      setSelectedWeek(currentWeekRes.data.data.currentWeek);
      
    } catch (error) {
      console.error('Error fetching weekly data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getWeekData = () => {
    if (!selectedWeek) return null;
    return weeklyData.find(w => w.week === selectedWeek);
  };

  if (loading) {
    return (
      <div className="weekly-container">
        <div className="loading">Loading weekly progress...</div>
      </div>
    );
  }

  const weekData = getWeekData();

  return (
    <div className="weekly-container">
      <div className="weekly-header">
        <h1>📊 Weekly Progress</h1>
        <p className="subtitle">Track week-by-week performance</p>
      </div>

      <div className="week-tabs">
        {[1, 2, 3, 4].map(week => (
          <button
            key={week}
            className={`week-tab ${selectedWeek === week ? 'active' : ''} ${week > currentWeek ? 'disabled' : ''}`}
            onClick={() => week <= currentWeek && setSelectedWeek(week)}
            disabled={week > currentWeek}
          >
            Week {week}
            {week === currentWeek && <span className="current-badge">Current</span>}
            {week > currentWeek && <span className="upcoming-badge">Upcoming</span>}
          </button>
        ))}
      </div>

      {weekData && weekData.topUsers.length > 0 ? (
        <div className="weekly-content">
          <div className="week-title">
            <h2>Week {selectedWeek} Top Performers</h2>
            <p>Showing incremental progress for this week</p>
          </div>

          <div className="weekly-leaderboard">
            {weekData.topUsers.map((user, index) => (
              <div key={user.email} className={`weekly-card ${index < 3 ? 'podium' : ''}`}>
                <div className="weekly-rank">
                  {index === 0 && '🥇'}
                  {index === 1 && '🥈'}
                  {index === 2 && '🥉'}
                  {index > 2 && `#${index + 1}`}
                </div>
                
                <div className="weekly-user-info">
                  <div className="weekly-user-name">{user.name}</div>
                  <div className="weekly-user-email">{user.email}</div>
                </div>

                <div className="weekly-stats">
                  <div className="weekly-stat">
                    <span className="stat-icon">🏆</span>
                    <span className="stat-value">{user.badges_completed}</span>
                    <span className="stat-label">Badges</span>
                  </div>
                  
                  <div className="weekly-stat">
                    <span className="stat-icon">🎮</span>
                    <span className="stat-value">{user.labs_completed}</span>
                    <span className="stat-label">Labs</span>
                  </div>
                  
                  <div className="weekly-stat total">
                    <span className="stat-icon">✨</span>
                    <span className="stat-value">{user.total_completed}</span>
                    <span className="stat-label">Total</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-data-message">
          <p>📅 Week {selectedWeek} data will be available once the week begins!</p>
        </div>
      )}

      <div className="weekly-info">
        <h3>About Weekly Tracking</h3>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">📅</div>
            <div className="info-text">
              <strong>Week 1:</strong> Days 1-7
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">📅</div>
            <div className="info-text">
              <strong>Week 2:</strong> Days 8-14
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">📅</div>
            <div className="info-text">
              <strong>Week 3:</strong> Days 15-21
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">📅</div>
            <div className="info-text">
              <strong>Week 4:</strong> Days 22-28
            </div>
          </div>
        </div>
        <p className="info-note">
          Weekly progress shows <strong>new</strong> badges and labs completed during that specific week.
        </p>
      </div>
    </div>
  );
}

export default WeeklyProgress;