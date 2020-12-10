const express = require("express");

const Users = require("../models/users");
const Bookings = require("../models/bookings");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {})
  .post((req, res) => {
    new User({
      companyName: req.body.companyName,
      country: req.body.country,
      regNumber: req.body.reqNumber,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,
    })
      .save()
      .then((newUser) => {
        res.status(201).json({ newUser });
      });
  });
