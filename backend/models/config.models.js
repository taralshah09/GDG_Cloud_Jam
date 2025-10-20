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
    { value },
    { upsert: true, new: true }
  );
};

const Config = mongoose.model('Config', configSchema);

export default Config;