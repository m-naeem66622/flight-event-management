const db = require("../models/index.model");
const Flight = db.flights;
const Op = db.Sequelize.Op;

const sendMail = require("../helpers/nodemailer.helper");

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.findAll();
    res.render("flights", { flights });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send();
    }
    res.render("flight", { flight });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createFlight = async (req, res) => {
  try {
    let errors = [];
    console.log("createFlight --> req.body", req.body);

    if (!req.body.email || !req.body.departDate) {
      errors.push("Email and departure date are required");
      return res.render("error.view.ejs", { errors });
    }

    const departDate = new Date(req.body.departDate);
    const returnDate = req.body.returnDate
      ? new Date(req.body.returnDate)
      : null;

    if (departDate < new Date()) {
      errors.push("Departure date must be a future date");
    }

    if (returnDate && returnDate < new Date()) {
      errors.push("Return date must be a future date");
    }

    if (returnDate && returnDate < departDate) {
      errors.push("Return date must be after departure date");
    }

    if (errors.length > 0) {
      // Render error page
      res.render("error.view.ejs", { errors });
    } else {
      const flight = await Flight.create(req.body);
      const response = await sendMail(
        req.body.email,
        "Reservation Confirmed!",
        "Your flight has been booked!"
      );

      console.log("flightController --> response", response);
      res.status(201).send(flight);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateFlight = async (req, res) => {
  try {
    const flight = await Flight.update(req.params.id, req.body);
    if (!flight) {
      return res.status(404).send();
    }
    res.send(flight);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.delete(req.params.id);
    if (!flight) {
      return res.status(404).send();
    }
    res.send(flight);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
