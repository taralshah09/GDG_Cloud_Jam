import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";
import cors from "cors";
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// MongoDB connection
mongoose
  .connect(MONGO_URL)
  .then(async () => {
    console.log("✅ DB connected!");
  })
  .catch((err) => console.log("❌ Error: ", err.message));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [FRONTEND_URL, "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'GDGOC Leaderboard API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      leaderboard: '/api/leaderboard',
      houses: '/api/leaderboard/houses',
      weekly: '/api/leaderboard/weekly',
      user: '/api/leaderboard/user/:email',
      uploadCSV: '/api/csv/upload',
      config: '/api/config'
    }
  });
});

// API Routes
app.use('/api', routes);

// Error handlers (must be after routes)
app.use(notFoundHandler);
app.use(errorHandler);

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 API Base URL: http://localhost:${PORT}/api`);
  console.log(`🌐 Frontend URL: ${FRONTEND_URL}`);
});