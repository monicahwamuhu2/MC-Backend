// In server.js, modify to ensure CORS and port are properly set
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.com'] // Update with your frontend URL when deployed
    : ['http://localhost:3000']
}));
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/therapists', require('./routes/therapists'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'API running' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));