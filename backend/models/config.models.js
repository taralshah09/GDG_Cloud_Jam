import mongoose from 'mongoose';

const configSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  lastUpdateDate: {
    type: Date,
    default: Date.now,
    index: true
  }
}, {
  timestamps: true
});

// Static method to get or create program start date
configSchema.statics.getProgramStartDate = async function() {
  let config = await this.findOne({ key: 'program_start_date' });
  
  if (!config) {
    // If not set, create with current date
    config = await this.create({
      key: 'program_start_date',
      value: new Date()
    });
  }
  
  return new Date(config.value);
};

// Static method to set program start date
configSchema.statics.setProgramStartDate = async function(date) {
  return await this.findOneAndUpdate(
    { key: 'program_start_date' },
    { value: date },
    { upsert: true, new: true }
  );
};

// Static method to get any config value
configSchema.statics.getConfig = async function(key) {
  const config = await this.findOne({ key });
  return config ? config.value : null;
};

// Static method to set any config value
configSchema.statics.setConfig = async function(key, value) {
  return await this.findOneAndUpdate(
    { key },
    { 
      value,
      lastUpdateDate: new Date()
    },
    { upsert: true, new: true }
  );
};

// Static method to get last update date
configSchema.statics.getLastUpdateDate = async function() {
  // Find the most recent config entry by lastUpdateDate
  const config = await this.findOne().sort({ lastUpdateDate: -1 });
  
  if (!config) {
    // If no config exists, create a default one
    const defaultConfig = await this.create({
      key: 'default_config',
      value: 'default',
      lastUpdateDate: new Date()
    });
    return defaultConfig.lastUpdateDate;
  }
  
  return config.lastUpdateDate;
};

// Static method to set last update date
configSchema.statics.setLastUpdateDate = async function(date = new Date()) {
  // Update all config entries with the new lastUpdateDate
  return await this.updateMany({}, { lastUpdateDate: date });
};

// Static method to update last update date to current time
configSchema.statics.updateLastUpdateDate = async function() {
  return await this.setLastUpdateDate(new Date());
};

// Static method to manually update last update date for a specific config
configSchema.statics.updateConfigLastUpdateDate = async function(key, date = new Date()) {
  return await this.findOneAndUpdate(
    { key },
    { lastUpdateDate: date },
    { upsert: true, new: true }
  );
};

// Static method to update database last update date (dedicated for user data changes)
configSchema.statics.updateDatabaseLastUpdateDate = async function(date = new Date()) {
  return await this.findOneAndUpdate(
    { key: 'database_last_update' },
    { 
      value: date,
      lastUpdateDate: date 
    },
    { upsert: true, new: true }
  );
};

const Config = mongoose.model('Config', configSchema);

export default Config;