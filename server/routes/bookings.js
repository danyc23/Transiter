const express = require("express");
const controller = require("../controller/bookings");
const router = express.Router();

//get all bookings
router.route("/").get(controller.getBookings);

//get bookings from user
router.route("/:id").get(controller.getUserBookings);

//create a new booking
router.route("/:id").post(controller.newBooking);

module.exports = router;
