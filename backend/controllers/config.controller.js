import Config from '../models/config.models.js';

class ConfigController {
  // GET program start date
  async getProgramStartDate(req, res) {
    try {
      const startDate = await Config.getProgramStartDate();
      
      res.json({
        success: true,
        data: {
          startDate
        }
      });
      
    } catch (error) {
      console.error('Error fetching program start date:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch program start date',
        error: error.message
      });
    }
  }

  // POST/UPDATE program start date
  async setProgramStartDate(req, res) {
    try {
      const { startDate } = req.body;
      
      if (!startDate) {
        return res.status(400).json({
          success: false,
          message: 'Start date is required'
        });
      }
      
      const date = new Date(startDate);
      
      if (isNaN(date.getTime())) {
        return res.status(400).json({
          success: false,
          message: 'Invalid date format'
        });
      }
      
      await Config.setProgramStartDate(date);
      
      res.json({
        success: true,
        message: 'Program start date updated successfully',
        data: {
          startDate: date
        }
      });
      
    } catch (error) {
      console.error('Error setting program start date:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to set program start date',
        error: error.message
      });
    }
  }

  // GET current week
  async getCurrentWeek(req, res) {
    try {
      const startDate = new Date("2025-10-20T00:00:00.000Z");
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      let currentWeek = 1;
      if (diffDays <= 7) currentWeek = 1;
      else if (diffDays <= 14) currentWeek = 2;
      else if (diffDays <= 21) currentWeek = 3;
      else if (diffDays <= 28) currentWeek = 4;
      else currentWeek = 4;
      
      res.json({
        success: true,
        data: {
          currentWeek,
          startDate,
          currentDate,
          daysElapsed: diffDays
        }
      });
      
    } catch (error) {
      console.error('Error calculating current week:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to calculate current week',
        error: error.message
      });
    }
  }

  // GET last update date
  async getLastUpdateDate(req, res) {
    try {
      const lastUpdateDate = await Config.getLastUpdateDate();
      
      res.json({
        success: true,
        data: {
          lastUpdateDate
        }
      });
      
    } catch (error) {
      console.error('Error fetching last update date:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch last update date',
        error: error.message
      });
    }
  }

  // POST/UPDATE last update date (manual update)
  async setLastUpdateDate(req, res) {
    try {
      const { lastUpdateDate } = req.body;
      
      let date;
      if (lastUpdateDate) {
        date = new Date(lastUpdateDate);
        if (isNaN(date.getTime())) {
          return res.status(400).json({
            success: false,
            message: 'Invalid date format'
          });
        }
      } else {
        date = new Date();
      }
      
      await Config.updateDatabaseLastUpdateDate(date);
      
      res.json({
        success: true,
        message: 'Last update date updated successfully',
        data: {
          lastUpdateDate: date
        }
      });
      
    } catch (error) {
      console.error('Error setting last update date:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to set last update date',
        error: error.message
      });
    }
  }
}

export default new ConfigController();