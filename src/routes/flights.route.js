const express = require("express");
const router = express.Router();
const flightsController = require("../controllers/flights.controller");

// Route to create a new flight
router.post("/", flightsController.createFlight);

module.exports = router;
