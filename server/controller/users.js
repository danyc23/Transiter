const Bookings = require("../models/bookings");
const Users = require("../models/users");

//get all users with its bookings
const getUsers = (req, res) => {
  Users.fetchAll({ withRelated: ["bookings"] }).then((users) => {
    res.status(200).json({ users });
  });
};
//get user with its bookings
const getUserWithBookings = (req, res) => {
  Users.where({ id: req.params.id })
    .fetchAll({ withRelated: ["bookings"] })
    .then((user) => {
      res.status(200).json({ user });
    });
};

//create a new user

const createNewUser = (req, res) => {
  const {
    companyName,
    country,
    regNumber,
    address,
    phone,
    email,
    password,
  } = req.body;

  if (
    !companyName ||
    !country ||
    !regNumber ||
    !address ||
    !phone ||
    !email ||
    !password
  ) {
    res.json({ error: "Please fill all the spaces" });
  } else {
    new User({
      companyName,
      country,
      regNumber,
      address,
      phone,
      email,
      password,
    })
      .save()
      .then((newUser) => {
        res.status(201).json({ newUser });
      });
  }
};

module.exports = {
  getUsers,
  getUserWithBookings,
  createNewUser,
};
