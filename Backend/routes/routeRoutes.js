const express = require('express');
const router = express.Router();
const RouteController = require('../controllers/routeController');

// Get all routes
router.get('/', RouteController.getAllRoutes);

// Get a specific route by ID
router.get('/:routeId', RouteController.getRouteById);

module.exports = router;
