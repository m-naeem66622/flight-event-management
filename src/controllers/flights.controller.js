const db = require("../models/index.model");
const Flight = db.flights;
const sendMail = require("../helpers/nodemailer.helper");

// Create and Save a new Flight
exports.createFlight = async (req, res) => {
  try {
    let errors = [];

    if (!req.body.email || !req.body.departDate) {
      errors.push("Email and departure date are required");
      return res.render("error.view.ejs", { errors });
    }

    const obj = {
      email: req.body.email,
      departDate: new Date(req.body.departDate),
      returnDate: req.body.returnDate ? new Date(req.body.returnDate) : null,
    };

    if (obj.departDate < new Date()) {
      errors.push("Departure date must be a future date");
    }

    if (obj.returnDate && obj.returnDate < new Date()) {
      errors.push("Return date must be a future date");
    }

    if (obj.returnDate && obj.returnDate < obj.departDate) {
      errors.push("Return date must be after departure date");
    }

    if (errors.length > 0) {
      // Render error page if validation fails
      res.render("error.view.ejs", { errors });
    } else {
      console.log("obj------>", obj);
      const flight = await Flight.create(obj);
      const response = await sendMail(
        req.body.email,
        "Reservation Confirmed!",
        "Your flight has been booked!"
      );

      // Render thank you page after confirmation
      res.render("thankyou.view.ejs");
    }
  } catch (error) {
    res.status(400).send(error.message);
    console.trace();
  }
};
