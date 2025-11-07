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
      // const startDate = await Config.getProgramStartDate();
      // ⚠️ IMPORTANT: Use the actual program start date (October 20, 2025)
      const startDate = new Date("2025-10-20T00:00:00.000Z");  // Using 2025 and midnight UTC
      const currentDate = new Date();
      
      // Calculate difference in days
      const diffTime = currentDate.getTime() - startDate.getTime();
      
      // If current date is BEFORE start date, return week 1
      if (diffTime < 0) {
        console.log('⚠️ Current date is before program start date. Defaulting to week 1.');
        return 1;
      }
      
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      console.log(`📅 Days since program start: ${diffDays}`);
      
      // Week 1: Days 0-6 (first 7 days)
      if (diffDays < 7) return 1;
      // Week 2: Days 7-13 (next 7 days)
      if (diffDays < 14) return 2;
      // Week 3: Days 14-20 (next 7 days)
      if (diffDays < 21) return 3;
      // Week 4: Days 21-27 (next 7 days)
      if (diffDays < 28) return 4;
      // After 28 days, stay at week 4
      return 4;
    } catch (error) {
      console.error('Error getting current week:', error);
      return 1;
    }
  }

  // Parse pipe-separated badges
  parseBadges(badgesString) {
    if (!badgesString || badgesString === '' || badgesString === '""') return [];
    badgesString = badgesString.replace(/^"|"$/g, '');
    return badgesString
      .split('|')
      .map(badge => badge.trim())
      .filter(badge => badge.length > 0);
  }

  // Parse pipe-separated labs/games
  parseLabs(labsString) {
    if (!labsString || labsString === '' || labsString === '""') return [];
    labsString = labsString.replace(/^"|"$/g, '');
    return labsString
      .split('|')
      .map(lab => lab.trim())
      .filter(lab => lab.length > 0);
  }

  // Detect CSV format based on header or first data row
  detectFormat(lines) {
    if (lines.length < 2) return 'new';
    
    const firstDataLine = lines[1];
    const fields = this.parseCSVLine(firstDataLine);
    
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
            name = fields[0]?.replace(/^"|"$/g, '').trim();
            email = fields[1]?.replace(/^"|"$/g, '').trim().toLowerCase();
            profileUrl = fields[2]?.replace(/^"|"$/g, '').trim();
            badges_completed = parseInt(fields[6]?.replace(/^"|"$/g, '')) || 0;
            badgesString = fields[7]?.replace(/^"|"$/g, '') || '';
            labs_completed = parseInt(fields[8]?.replace(/^"|"$/g, '')) || 0;
            labsString = fields[9]?.replace(/^"|"$/g, '') || '';
          } else {
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
          
          // --- 🔒 Validate limits ---
          const MAX_BADGES = 19;
          const MAX_LABS = 1;
          
          // Check if values exceed limits
          const exceedsLimits = badges_completed > MAX_BADGES || labs_completed > MAX_LABS;
          
          if (exceedsLimits) {
            console.log(`⚠️ User ${name} (${email}) exceeds limits - Badges: ${badges_completed}/${MAX_BADGES}, Labs: ${labs_completed}/${MAX_LABS}. Skipping update.`);
            results.errors.push({
              row: i + 2,
              error: `Exceeds limits (Badges: ${badges_completed}/${MAX_BADGES}, Labs: ${labs_completed}/${MAX_LABS})`,
              data: { name, email, badges_completed, labs_completed }
            });
            continue;
          }
          
          console.log(`Processing user: ${name} (${email}) - Badges: ${badges_completed}, Labs: ${labs_completed}`);
          
          // Find existing user by email
          const existingUser = await User.findOne({ email });
          
          if (existingUser) {
            // Calculate overall progress change
            const prevBadges = existingUser.badges_completed || 0;
            const prevLabs = existingUser.labs_completed || 0;
            
            const badgeIncrement = Math.max(0, badges_completed - prevBadges);
            const labIncrement = Math.max(0, labs_completed - prevLabs);
            const totalIncrement = badgeIncrement + labIncrement;
            
            // Update overall user data
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
            
            // --- 🕒 Handle progress timestamps ---
            if (totalIncrement > 0) {
              existingUser.lastUpdated = new Date();
              existingUser.progressReachedAt = new Date();
              console.log(`   ⏰ Progress timestamp updated for ${name} (+${totalIncrement} total)`);
            }
            
            await existingUser.save();
            results.updated++;
            
            // Update database last update date
            await Config.updateDatabaseLastUpdateDate();
            
            console.log(`✅ Updated user: ${name} | Week ${currentWeek} snapshot: ${badges_completed + labs_completed} total`);
            
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
              },
              lastUpdated: new Date(),
              progressReachedAt: new Date()
            });
            
            await newUser.save();
            results.created++;
            
            // Update database last update date
            await Config.updateDatabaseLastUpdateDate();
            
            console.log(`✅ Created new user: ${name} (House ${house_id}) | Week ${currentWeek} snapshot: ${badges_completed + labs_completed} total`);
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