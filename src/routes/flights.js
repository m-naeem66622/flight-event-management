const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flightsController');

// Route to get all flights
router.get('/', flightsController.getAllFlights);

// Route to get a specific flight by id
router.get('/:id', flightsController.getFlightById);

// Route to create a new flight
router.post('/', flightsController.createFlight);

// Route to update a flight
router.put('/:id', flightsController.updateFlight);

// Route to delete a flight
router.delete('/:id', flightsController.deleteFlight);

module.exports = router;