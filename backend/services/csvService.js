import fs from 'fs';
import User from '../models/users.models.js';
import Config from '../models/config.models.js';

class CSVService {
  // Parse CSV line handling quoted fields with commas
  parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    
    return result;
  }

  // Get current week based on program start date
  async getCurrentWeek() {
    try {
      const startDate = await Config.getProgramStartDate();
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 7) return 1;
      if (diffDays <= 14) return 2;
      if (diffDays <= 21) return 3;
      if (diffDays <= 28) return 4;
      return 4; // Cap at week 4
    } catch (error) {
      console.error('Error getting current week:', error);
      return 1;
    }
  }

  // Parse pipe-separated badges
  parseBadges(badgesString) {
    if (!badgesString || badgesString === '') return [];
    return badgesString
      .split('|')
      .map(badge => badge.trim())
      .filter(badge => badge.length > 0);
  }

  // Parse pipe-separated labs/games
  parseLabs(labsString) {
    if (!labsString || labsString === '') return [];
    return labsString
      .split('|')
      .map(lab => lab.trim())
      .filter(lab => lab.length > 0);
  }

  // Process uploaded CSV file
  async processCSV(filePath) {
    const results = {
      total: 0,
      updated: 0,
      created: 0,
      errors: [],
      currentWeek: 1
    };

    try {
      // Read file
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContent.split('\n').filter(line => line.trim());
      
      if (lines.length < 2) {
        throw new Error('CSV file is empty or has no data rows');
      }
      
      // Get current week
      const currentWeek = await this.getCurrentWeek();
      results.currentWeek = currentWeek;
      const weekKey = `week${currentWeek}`;
      
      // Skip header line
      const dataLines = lines.slice(1);
      results.total = dataLines.length;
      
      for (let i = 0; i < dataLines.length; i++) {
        try {
          const fields = this.parseCSVLine(dataLines[i]);
          
          // CSV Column mapping
          const name = fields[0]?.trim();
          const email = fields[1]?.trim().toLowerCase();
          const profileUrl = fields[2]?.trim();
          const badges_completed = parseInt(fields[9]) || 0;
          const badgesString = fields[10] || '';
          const labs_completed = parseInt(fields[11]) || 0;
          const labsString = fields[12] || '';
          
          // Validate required fields
          if (!email || !name) {
            results.errors.push({
              row: i + 2,
              error: 'Missing email or name'
            });
            continue;
          }
          
          // Parse arrays
          const badges = this.parseBadges(badgesString);
          const labs = this.parseLabs(labsString);
          
          // Find existing user by email
          const existingUser = await User.findOne({ email });
          
          if (existingUser) {
            // Calculate weekly increments
            const prevBadges = existingUser.badges_completed || 0;
            const prevLabs = existingUser.labs_completed || 0;
            
            const badgeIncrement = Math.max(0, badges_completed - prevBadges);
            const labIncrement = Math.max(0, labs_completed - prevLabs);
            const totalIncrement = badgeIncrement + labIncrement;
            
            // Update user data
            existingUser.name = name;
            existingUser.profileUrl = profileUrl;
            existingUser.badges_completed = badges_completed;
            existingUser.badges = badges;
            existingUser.labs_completed = labs_completed;
            existingUser.labs = labs;
            
            // Update weekly progress (accumulate for current week)
            const currentWeekData = existingUser[weekKey] || {
              badges_completed: 0,
              labs_completed: 0,
              total_completed: 0
            };
            
            existingUser[weekKey] = {
              badges_completed: currentWeekData.badges_completed + badgeIncrement,
              labs_completed: currentWeekData.labs_completed + labIncrement,
              total_completed: currentWeekData.total_completed + totalIncrement
            };
            
            existingUser.lastUpdated = new Date();
            
            await existingUser.save();
            results.updated++;
            
          } else {
            // Create new user - assign to house using round-robin
            const userCount = await User.countDocuments();
            const house_id = (userCount % 7) + 1;
            
            const newUser = new User({
              email,
              name,
              profileUrl,
              house_id,
              badges_completed,
              badges,
              labs_completed,
              labs,
              [weekKey]: {
                badges_completed,
                labs_completed,
                total_completed: badges_completed + labs_completed
              }
            });
            
            await newUser.save();
            results.created++;
          }
          
        } catch (error) {
          results.errors.push({
            row: i + 2,
            error: error.message
          });
        }
      }
      
      return results;
      
    } catch (error) {
      throw new Error(`Failed to process CSV: ${error.message}`);
    }
  }
}

export default new CSVService();