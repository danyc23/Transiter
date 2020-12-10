const express = require("express");

const Bookings = require("../models/bookings");
const Users = require("../models/users");

const router = express.router();

router
  .route("/")
  .get((req, res) => {
    Bookings.where(req.query)
      .fetchAll({ withRelated: ["users"] })
      .then((bookings) => {
        res.status(200).json({ bookings });
      });
  })
  .post((req, res) => {
    new Booking({
      dates: req.body.dates,
      description: req.body.description,
    });
  })
  .put((req, res) => {
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
  });

module.exports = router;
