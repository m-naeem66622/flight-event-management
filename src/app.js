require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const flightsRouter = require("./routes/flights");

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

module.exports = app;
