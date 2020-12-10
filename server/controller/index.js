const { getUsers, getUserWithBookings, createNewUser } = require("./users");
const { getBookings, getUserBookings, newBooking } = require("./bookings");

module.exports = {
  getUsers,
  getUserWithBookings,
  createNewUser,
  getBookings,
  getUserBookings,
  newBooking,
};
