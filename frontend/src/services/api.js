import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Leaderboard APIs
export const getLeaderboard = (house = 'all', week = 'all') => {
  return api.get('/leaderboard', {
    params: { house, week }
  });
};

export const getHouseStats = () => {
  return api.get('/leaderboard/houses');
};

export const getUserByEmail = (email) => {
  return api.get(`/leaderboard/user/${email}`);
};

export const getWeeklyComparison = () => {
  return api.get('/leaderboard/weekly');
};

// Config APIs
export const getCurrentWeek = () => {
  return api.get('/config/current-week');
};

export const getProgramStartDate = () => {
  return api.get('/config/start-date');
};

// Health check
export const healthCheck = () => {
  return api.get('/health');
};

export default api;