const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import and use routes
const busRoutes = require('../routes/busRoutes');
const routeRoutes = require('../routes/routeRoutes');
const scheduleRoutes = require('../routes/scheduleRoutes');

app.use('/api/buses', busRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/schedule', scheduleRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Export the app for use in index.js
module.exports = app;
