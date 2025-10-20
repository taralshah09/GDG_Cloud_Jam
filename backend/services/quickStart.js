import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execPromise = promisify(exec);

console.log('🚀 GDGOC Leaderboard Quick Start\n');

async function quickStart() {
  try {
    // Check if .env exists
    if (!fs.existsSync('.env')) {
      console.log('📝 Creating .env file...');
      const envContent = `# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/gdgoc-leaderboard

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:3000

# Program Configuration
PROGRAM_START_DATE=${new Date().toISOString().split('T')[0]}
`;
      fs.writeFileSync('.env', envContent);
      console.log('✅ .env file created\n');
    } else {
      console.log('✅ .env file already exists\n');
    }

    // Create uploads directory
    if (!fs.existsSync('./uploads')) {
      fs.mkdirSync('./uploads');
      console.log('✅ Created uploads directory\n');
    }

    // Check if node_modules exists
    if (!fs.existsSync('./node_modules')) {
      console.log('📦 Installing dependencies...');
      console.log('   This may take a few minutes...\n');
      await execPromise('npm install');
      console.log('✅ Dependencies installed\n');
    } else {
      console.log('✅ Dependencies already installed\n');
    }

    console.log('🔧 Running database setup...');
    await execPromise('node scripts/setupdatabase.js');
    console.log('✅ Database setup complete\n');

    console.log('🎲 Generating sample data...');
    await execPromise('node scripts/generateSampleCSV.js');
    console.log('✅ Sample CSV generated\n');

    console.log('═══════════════════════════════════════════════════');
    console.log('✅ Quick Start Complete!');
    console.log('═══════════════════════════════════════════════════\n');

    console.log('📋 Next Steps:\n');
    console.log('1. Start the server:');
    console.log('   npm start\n');
    console.log('2. Upload the sample CSV:');
    const csvFiles = fs.readdirSync('.').filter(f => f.startsWith('sample_data_'));
    if (csvFiles.length > 0) {
      console.log(`   curl -X POST -F "file=@${csvFiles[0]}" http://localhost:5000/api/csv/upload\n`);
    }
    console.log('3. Test the API:');
    console.log('   curl http://localhost:5000/api/leaderboard\n');
    console.log('4. View all endpoints:');
    console.log('   curl http://localhost:5000/\n');

    console.log('📚 For more information, check:');
    console.log('   - README.md for full documentation');
    console.log('   - TESTING.md for testing guide\n');

  } catch (error) {
    console.error('❌ Error during quick start:', error.message);
    console.error('\nPlease check:');
    console.error('1. MongoDB is installed and running');
    console.error('2. Node.js version is 14 or higher');
    console.error('3. You have write permissions in this directory');
    process.exit(1);
  }
}

quickStart();