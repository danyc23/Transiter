const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

//get all users
router.route("/").get(controller.getUsers);
//get user with booking
router.route("/:id").get(controller.getUserWithBookings);

//create a new user
router.route("/").post(controller.newUser);

module.exports = router;
