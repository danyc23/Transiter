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
    .fetchAll({ withRelated: ["users"] })
    .then((bookings) => {
      res.status(200).json({ bookings });
    });
};

//post newBooking
const newBooking = (req, res) => {
  Bookings.where("id", req.params.id)
    .fetch()
    .then((booking) => {
      booking.save({
        date: req.body.date ? req.body.date : booking.date,
        status: req.body.status ? req.body.status : booking.status,
      });
    })
    .then((updatedBooking) => {
      res.status(200).json({ updatedBooking });
    });
};
module.exports({
  getBookings,
  getUserBookings,
  newBooking,
});
