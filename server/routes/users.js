const express = require("express");
const controller = require("../controller/users");
const router = express.Router();
const middleware = require("../middleware/auth");

//get all users
router.route("/").get(controller.getUsers);

//create a new user
router.route("/").post(controller.createNewUser);
//login a new user
router.route("/login").post(controller.loginUser);

//get user with booking
router.route("/:id").get(controller.getUserWithBookings);

module.exports = router;
