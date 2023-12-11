const Flight = require('../models/flight');

exports.getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.findAll();
        res.render('flights', { flights });
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
        res.render('flight', { flight });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createFlight = async (req, res) => {
    try {
        const flight = await Flight.create(req.body);
        res.status(201).send(flight);
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