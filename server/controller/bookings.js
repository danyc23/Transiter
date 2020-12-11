const Bookings = require("../models/bookings");
const Users = require("../models/users");

//get all bookings
const getBookings = (req, res) => {
  Bookings.fetchAll().then((bookings) => {
    res.status(200).json({ bookings });
  });
};

//get bookings from an specific user
const getUserBookings = (req, res) => {
  Bookings.where({ id: req.params.id })
    .fetch({ withRelated: ["users"] })
    .then((bookings) => {
      res.status(200).json({ bookings });
    });
};

//post newBooking
const newBooking = (req, res) => {
  new Bookings({
    user_id: req.params.id,
    date: req.body.date,
    description: req.body.description,
  })
    .save()
    .then((updatedBooking) => {
      res.status(200).json({ updatedBooking });
    });
};
module.exports = {
  getBookings,
  getUserBookings,
  newBooking,
};
