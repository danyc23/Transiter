const express = require("express");
const controller = require("../controller/bookings");
const router = express.Router();
const middleware = require("../middleware/auth");

//get all bookings
router.route("/").get(controller.getBookings);

//get bookings from user
router.route("/:id").get(controller.getUserBookings);

//create a new booking
router.route("/:id").post(controller.newBooking);
//delete a booking
router.route("/:id").delete(controller.deleteItem);

//update booking
router.route("/").put(controller.editBooking);

module.exports = router;
