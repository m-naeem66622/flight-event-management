const path = require("path");
const express = require("express");
const app = express();

const db = require("./models/index.model");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Import routers
const indexRouter = require("./routes/index.route");
const flightsRouter = require("./routes/flights.route");

// Set up body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Set up static files middleware
app.use(express.static(__dirname + "/public"));

// Set up EJS for server-side rendering
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Use the routers
app.use("/", indexRouter);
app.use("/flights", flightsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
