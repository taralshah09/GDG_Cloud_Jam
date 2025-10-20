import express from 'express';
import csvController from '../controllers/csv.controller.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// POST /api/csv/upload - Upload and process CSV file
router.post('/upload', upload.single('file'), csvController.uploadCSV.bind(csvController));

// GET /api/csv/history - Get upload history (optional feature)
router.get('/history', csvController.getUploadHistory.bind(csvController));

export default router;