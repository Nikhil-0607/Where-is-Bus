const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/scheduleController');

// Get schedule for a specific bus
router.get('/:busId', ScheduleController.getScheduleByBusId);

// Get available schedules for a specific date
router.get('/date/:date', ScheduleController.getAvailableSchedules);

module.exports = router;
