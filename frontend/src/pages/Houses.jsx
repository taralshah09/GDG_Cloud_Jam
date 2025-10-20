import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHouseStats } from '../services/api';
import './Houses.css';

function Houses() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHouseStats();
  }, []);

  const fetchHouseStats = async () => {
    try {
      setLoading(true);
      const res = await getHouseStats();
      setHouses(res.data.data);
    } catch (error) {
      console.error('Error fetching house stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const getHouseColor = (houseId) => {
    const colors = [
      '#FF6B6B', // Red
      '#4ECDC4', // Teal
      '#45B7D1', // Blue
      '#FFA07A', // Orange
      '#98D8C8', // Green
      '#C7B3E5', // Purple
      '#FFD93D'  // Yellow
    ];
    return colors[houseId - 1] || '#6C757D';
  };

  const handleViewHouse = (houseId) => {
    navigate(`/leaderboard?house=${houseId}`);
  };

  if (loading) {
    return (
      <div className="houses-container">
        <div className="loading">Loading house statistics...</div>
      </div>
    );
  }

  return (
    <div className="houses-container">
      <div className="houses-header">
        <h1>🏠 House Rankings</h1>
        <p className="subtitle">Competition standings across all houses</p>
      </div>

      <div className="houses-grid">
        {houses.map((house, index) => (
          <div 
            key={house.house_id} 
            className="house-card"
            style={{ borderColor: getHouseColor(house.house_id) }}
          >
            <div 
              className="house-header"
              style={{ backgroundColor: getHouseColor(house.house_id) }}
            >
              <div className="house-rank">#{index + 1}</div>
              <div className="house-name">House {house.house_id}</div>
            </div>

            <div className="house-stats">
              <div className="stat-row">
                <span className="stat-label">👥 Members</span>
                <span className="stat-value">{house.total_members}</span>
              </div>

              <div className="stat-row">
                <span className="stat-label">🏆 Total Badges</span>
                <span className="stat-value">{house.total_badges}</span>
              </div>

              <div className="stat-row">
                <span className="stat-label">🎮 Total Labs</span>
                <span className="stat-value">{house.total_labs}</span>
              </div>

              <div className="stat-row">
                <span className="stat-label">📊 Avg Badges</span>
                <span className="stat-value">{house.average_badges}</span>
              </div>

              <div className="stat-row">
                <span className="stat-label">📈 Avg Labs</span>
                <span className="stat-value">{house.average_labs}</span>
              </div>

              <div className="stat-row total-row">
                <span className="stat-label">✨ Total Score</span>
                <span className="stat-value total-score">
                  {house.total_badges + house.total_labs}
                </span>
              </div>
            </div>

            <button 
              className="view-house-btn"
              onClick={() => handleViewHouse(house.house_id)}
              style={{ backgroundColor: getHouseColor(house.house_id) }}
            >
              View Leaderboard
            </button>
          </div>
        ))}
      </div>

      <div className="houses-info">
        <h3>About Houses</h3>
        <p>
          Participants are automatically assigned to one of 7 houses. 
          Houses compete based on total badges and labs completed by their members.
          The house with the highest combined score wins!
        </p>
      </div>
    </div>
  );
}

export default Houses;