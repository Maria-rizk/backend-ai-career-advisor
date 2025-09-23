const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const careerRoutes = require('./routes/careerRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(morgan('combined'));
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/career', careerRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('AI Career Advisor Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});