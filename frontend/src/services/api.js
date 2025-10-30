import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://gdg-cloud-jam.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Leaderboard APIs
export const getLeaderboard = (house = "all", week = "all") => {
  return api.get("/leaderboard", {
    params: { house, week },
  });
};

export const getHouseStats = () => {
  return api.get("/leaderboard/houses");
};

export const getUserByEmail = (email) => {
  return api.get(`/leaderboard/user/${email}`);
};

export const getWeeklyComparison = () => {
  return api.get("/leaderboard/weekly");
};

// Config APIs
export const getCurrentWeek = () => {
  return api.get("/config/current-week");
};

export const getProgramStartDate = () => {
  return api.get("/config/start-date");
};

export const getLastUpdateDate = () => {
  return api.get("/config/last-update");
};

export const setLastUpdateDate = (lastUpdateDate) => {
  return api.post("/config/last-update", { lastUpdateDate });
};

// Health check
export const healthCheck = () => {
  return api.get("/health");
};

export const allCompleted = () => {
  return api.get("/leaderboard/all_completed");
};

export default api;
