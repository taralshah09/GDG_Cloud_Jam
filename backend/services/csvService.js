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
    if (!badgesString || badgesString === '' || badgesString === '""') return [];
    // Remove quotes if present
    badgesString = badgesString.replace(/^"|"$/g, '');
    return badgesString
      .split('|')
      .map(badge => badge.trim())
      .filter(badge => badge.length > 0);
  }

  // Parse pipe-separated labs/games
  parseLabs(labsString) {
    if (!labsString || labsString === '' || labsString === '""') return [];
    // Remove quotes if present
    labsString = labsString.replace(/^"|"$/g, '');
    return labsString
      .split('|')
      .map(lab => lab.trim())
      .filter(lab => lab.length > 0);
  }

  // Detect CSV format based on header or first data row
  detectFormat(lines) {
    if (lines.length < 2) return 'new'; // Default to new format
    
    const firstDataLine = lines[1];
    const fields = this.parseCSVLine(firstDataLine);
    
    // New format has fewer columns and quoted fields
    // Old format has 13 columns, new format has 10 columns
    if (fields.length <= 10) {
      return 'new';
    }
    return 'old';
  }

  // Process uploaded CSV file
  async processCSV(filePath) {
    const results = {
      total: 0,
      updated: 0,
      created: 0,
      errors: [],
      currentWeek: 1,
      format: 'unknown'
    };

    try {
      // Read file
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContent.split('\n').filter(line => line.trim());
      
      if (lines.length < 2) {
        throw new Error('CSV file is empty or has no data rows');
      }
      
      // Detect format
      const format = this.detectFormat(lines);
      results.format = format;
      
      console.log(`📋 Detected CSV format: ${format}`);
      
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
          
          let name, email, profileUrl, badges_completed, badgesString, labs_completed, labsString;
          
          if (format === 'new') {
            // New format column mapping:
            // 0: User Name
            // 1: User Email
            // 2: Profile URL
            // 3: Profile URL Status
            // 4: Access Code Redemption Status
            // 5: All Skill Badges & Games Completed
            // 6: # of Skill Badges Completed
            // 7: Names of Completed Skill Badges
            // 8: # of Arcade Games Completed
            // 9: Names of Completed Arcade Games
            
            name = fields[0]?.replace(/^"|"$/g, '').trim();
            email = fields[1]?.replace(/^"|"$/g, '').trim().toLowerCase();
            profileUrl = fields[2]?.replace(/^"|"$/g, '').trim();
            badges_completed = parseInt(fields[6]?.replace(/^"|"$/g, '')) || 0;
            badgesString = fields[7]?.replace(/^"|"$/g, '') || '';
            labs_completed = parseInt(fields[8]?.replace(/^"|"$/g, '')) || 0;
            labsString = fields[9]?.replace(/^"|"$/g, '') || '';
          } else {
            // Old format column mapping:
            // 0: User Name
            // 1: User Email
            // 2: Profile URL
            // 3-8: Other fields
            // 9: # of Skill Badges Completed
            // 10: Names of Completed Skill Badges
            // 11: # of Arcade Games Completed
            // 12: Names of Completed Arcade Games
            
            name = fields[0]?.trim();
            email = fields[1]?.trim().toLowerCase();
            profileUrl = fields[2]?.trim();
            badges_completed = parseInt(fields[9]) || 0;
            badgesString = fields[10] || '';
            labs_completed = parseInt(fields[11]) || 0;
            labsString = fields[12] || '';
          }
          
          // Validate required fields
          if (!email || !name) {
            results.errors.push({
              row: i + 2,
              error: 'Missing email or name',
              data: { name, email }
            });
            continue;
          }
          
          // Parse arrays
          const badges = this.parseBadges(badgesString);
          const labs = this.parseLabs(labsString);
          
          console.log(`Processing user: ${name} (${email}) - Badges: ${badges_completed}, Labs: ${labs_completed}`);
          
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
            
            console.log(`✅ Updated user: ${name}`);
            
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
            
            console.log(`✅ Created new user: ${name} (House ${house_id})`);
          }
          
        } catch (error) {
          console.error(`❌ Error processing row ${i + 2}:`, error);
          results.errors.push({
            row: i + 2,
            error: error.message
          });
        }
      }
      
      console.log(`\n📊 Processing complete:`);
      console.log(`   Total rows: ${results.total}`);
      console.log(`   Created: ${results.created}`);
      console.log(`   Updated: ${results.updated}`);
      console.log(`   Errors: ${results.errors.length}`);
      
      return results;
      
    } catch (error) {
      console.error('❌ Failed to process CSV:', error);
      throw new Error(`Failed to process CSV: ${error.message}`);
    }
  }
}

export default new CSVService();