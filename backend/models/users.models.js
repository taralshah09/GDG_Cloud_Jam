import mongoose from 'mongoose';

// Tracks cumulative progress at the END of each week (snapshot)
const weeklyProgressSchema = new mongoose.Schema({
  badges_completed: { type: Number, default: 0 },
  labs_completed: { type: Number, default: 0 },
  total_completed: { type: Number, default: 0 }
}, { _id: false });

const userSchema = new mongoose.Schema({
  // Primary identifier
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  
  // Basic info
  name: {
    type: String,
    required: true,
    trim: true
  },
  
  profileUrl: {
    type: String,
    required: true
  },
  
  // House assignment (1-7)
  house_id: {
    type: Number,
    required: true,
    min: 1,
    max: 7,
    index: true
  },
  
  // Overall progress (cumulative total)
  badges_completed: {
    type: Number,
    default: 0,
    index: true
  },
  
  badges: [{
    type: String
  }],
  
  labs_completed: {
    type: Number,
    default: 0
  },
  
  labs: [{
    type: String
  }],
  
  // Weekly snapshots (cumulative progress at END of each week)
  // These represent "what the user had completed by the end of this week"
  week1: {
    type: weeklyProgressSchema,
    default: () => ({ badges_completed: 0, labs_completed: 0, total_completed: 0 })
  },
  
  week2: {
    type: weeklyProgressSchema,
    default: () => ({ badges_completed: 0, labs_completed: 0, total_completed: 0 })
  },
  
  week3: {
    type: weeklyProgressSchema,
    default: () => ({ badges_completed: 0, labs_completed: 0, total_completed: 0 })
  },
  
  week4: {
    type: weeklyProgressSchema,
    default: () => ({ badges_completed: 0, labs_completed: 0, total_completed: 0 })
  },
  
  // Metadata
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  
  // Timestamp tracking for tie-breaking
  progressReachedAt: {
    type: Date,
    default: Date.now,
    index: true
  }
}, {
  timestamps: true
});

// Compound indexes for leaderboard queries
userSchema.index({ house_id: 1, badges_completed: -1 });
userSchema.index({ 'week1.total_completed': -1 });
userSchema.index({ 'week2.total_completed': -1 });
userSchema.index({ 'week3.total_completed': -1 });
userSchema.index({ 'week4.total_completed': -1 });
userSchema.index({ badges_completed: -1, labs_completed: -1, progressReachedAt: 1 });

// Virtual for total completions
userSchema.virtual('total_completed').get(function() {
  return this.badges_completed + this.labs_completed;
});

// Ensure virtuals are included in JSON
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

const User = mongoose.model('User', userSchema);

export default User;