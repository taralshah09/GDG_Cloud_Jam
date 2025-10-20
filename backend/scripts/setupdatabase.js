import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Config from '../models/config.models.js';

dotenv.config();

async function setupDatabase() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    
    await mongoose.connect(process.env.MONGO_URL);
    
    console.log('✅ Connected to MongoDB');
    
    // Check if program start date is already set
    let config = await Config.findOne({ key: 'program_start_date' });
    
    if (!config) {
      // Set program start date to today (or you can manually set a specific date)
      const startDate = new Date();
      // If you want to set a specific date, uncomment and modify:
      // const startDate = new Date('2025-01-15');
      
      config = await Config.create({
        key: 'program_start_date',
        value: startDate
      });
      
      console.log(`📅 Program start date set to: ${startDate.toDateString()}`);
    } else {
      console.log(`📅 Program start date already configured: ${new Date(config.value).toDateString()}`);
    }
    
    // Create indexes
    console.log('🔨 Creating database indexes...');
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    if (collectionNames.includes('users')) {
      await mongoose.connection.collection('users').createIndexes([
        { key: { email: 1 }, unique: true },
        { key: { house_id: 1 } },
        { key: { badges_completed: -1 } },
        { key: { house_id: 1, badges_completed: -1 } }
      ]);
      console.log('✅ User indexes created');
    }
    
    console.log('✅ Database setup complete!');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

setupDatabase();