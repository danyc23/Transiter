require("dotenv").config();
const Bookings = require("../models/bookings");
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

//get all users with its bookings
// const getUsers = (req, res) => {
//   Users.fetchAll({ withRelated: ["bookings"] }).then((users) => {
//     res.status(200).json({ users });
//   });
// };
const getUsers = async (req, res) => {
  const data = await prisma.users.findMany({ include: { bookings: true } });
  if (!data) {
    res.sendStatus(500);
  }
  res.status(200).json(data);
};

//get user with its bookings
// const getUserWithBookings = (req, res) => {
//   Users.where({ id: req.params.id })
//     .fetch({ withRelated: ["bookings"] })
//     .then((user) => {
//       res.status(200).json({ user });
//     });
// };
const getUserWithBookings = async (req, res) => {
  const data = await prisma.users.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { bookings: true },
  });
  if (!data) {
    res.sendStatus(500);
  }
  res.status(200).json(data);
};

//create a new user

const createNewUser = async (req, res) => {
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
    // new Users({
    //   companyName,
    //   country,
    //   regNumber,
    //   address,
    //   phone,
    //   email,
    //   password,
    // })
    //   .save()
    //   .then((newUser) => {
    //     res.status(201).json({ newUser });
    //   });
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("creating user");
    await prisma.users
      .create({
        data: {
          companyName: companyName,
          country: country,
          regNumber: regNumber,
          address: address,
          phone: phone,
          email: email,
          password: hashedPassword,
        },
      })
      .then((newUser) => {
        res.status(201).json({ newUser });
      });
  }
};
//Login a user

const loginUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ msg: "Please insert email and password" });
  } else {
    // Users.where({ email: req.body.email })
    //   .fetch()
    await prisma.users
      .findUnique({
        where: { email: req.body.email },
        select: { password: true, id: true },
      })
      .then((user) => {
        // if (user.password === req.body.password) {
        //   // console.log("this is the password", user.password);
        //   let token = jwt.sign(
        //     { [req.body.email]: req.body.email },
        //     process.env.ACCESS_TOKEN_SECRET
        //   );
        //   res.status(200).json({ token });
        //   // res.status(200).json({ user }).json({ token });
        // } else {
        //   res.json({ error: "Incorrect password or email" });
        // }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          if (result) {
            let token = jwt.sign(
              { [req.body.email]: req.body.email },
              process.env.ACCESS_TOKEN_SECRET
            );
            res.status(200).json({ token, id: user.id });
          } else {
            res.status(404).json({ error: "Incorrect password or email" });
          }
        });
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log("there is an error");
      });
  }
};

module.exports = {
  getUsers,
  getUserWithBookings,
  createNewUser,
  loginUser,
};
