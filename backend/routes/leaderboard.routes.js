import express from 'express';
import leaderboardController from '../controllers/leaderboard.controller.js';

const router = express.Router();

// GET /api/leaderboard - Get leaderboard with filters (house, week)
router.get('/', leaderboardController.getLeaderboard.bind(leaderboardController));

// GET /api/leaderboard/houses - Get house-wise statistics
router.get('/houses', leaderboardController.getHouseStats.bind(leaderboardController));

// GET /api/leaderboard/weekly - Get weekly comparison
router.get('/weekly', leaderboardController.getWeeklyComparison.bind(leaderboardController));

// GET /api/leaderboard/user/:email - Get user details by email
router.get('/user/:email', leaderboardController.getUserByEmail.bind(leaderboardController));

export default router;