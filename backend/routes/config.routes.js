import express from 'express';
import configController from '../controllers/config.controller.js';

const router = express.Router();

// GET /api/config/start-date - Get program start date
router.get('/start-date', configController.getProgramStartDate.bind(configController));

// POST /api/config/start-date - Set program start date
router.post('/start-date', configController.setProgramStartDate.bind(configController));

// GET /api/config/current-week - Get current week number
router.get('/current-week', configController.getCurrentWeek.bind(configController));

export default router;