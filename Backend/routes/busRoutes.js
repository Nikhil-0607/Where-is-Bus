const express = require('express');
const router = express.Router();
const BusController = require('../controllers/busController');

// Get all buses
router.get('/', BusController.getAllBuses);

// Get a specific bus by ID
router.get('/:busId', BusController.getBusById);

// Track a specific bus's location
router.post('/track-bus', BusController.trackBus);

module.exports = router;
