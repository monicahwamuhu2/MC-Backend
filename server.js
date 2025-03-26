const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON bodies
app.use(express.json()); // Ensures Express can handle JSON

// Routes
app.use('/api/therapists', require('./routes/therapists')); // FIXED ROUTE

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
