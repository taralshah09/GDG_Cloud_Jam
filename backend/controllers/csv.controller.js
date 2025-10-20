import csvService from '../services/csvService.js';
import fs from 'fs';

class CSVController {
  // Upload and process CSV file
  async uploadCSV(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No file uploaded'
        });
      }
      
      const filePath = req.file.path;
      
      // Process CSV
      const results = await csvService.processCSV(filePath);
      
      // Delete uploaded file after processing
      fs.unlinkSync(filePath);
      
      res.json({
        success: true,
        message: 'CSV processed successfully',
        data: results
      });
      
    } catch (error) {
      // Clean up file if exists
      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      
      console.error('Error processing CSV:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to process CSV',
        error: error.message
      });
    }
  }

  // Get CSV upload status/history
  async getUploadHistory(req, res) {
    try {
      res.json({
        success: true,
        message: 'Upload history endpoint - to be implemented',
        data: []
      });
    } catch (error) {
      console.error('Error fetching upload history:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch upload history',
        error: error.message
      });
    }
  }
}

export default new CSVController();