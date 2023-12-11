const express = require("express");
const router = express.Router();

// Import flight routes
const flightRoutes = require("./flights");

// Use flight routes for all requests on /flights
router.use("/flights", flightRoutes);

// Home route
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
