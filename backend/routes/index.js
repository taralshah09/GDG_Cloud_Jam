import express from 'express';
import leaderboardRoutes from './leaderboard.routes.js';
import csvRoutes from './csv.routes.js';
import configRoutes from './config.routes.js';

const router = express.Router();

// Mount routes
router.use('/leaderboard', leaderboardRoutes);
router.use('/csv', csvRoutes);
router.use('/config', configRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date()
  });
});

export default router;