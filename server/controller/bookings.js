const Bookings = require('../models/bookings');
const Users = require('../models/users');
const { PrismaClient } = require('@prisma/client');
const { restart } = require('nodemon');
const prisma = new PrismaClient();

//get all bookings
const getBookings = (req, res) => {
  Bookings.fetchAll().then((bookings) => {
    res.status(200).json({ bookings });
  });
};

//get bookings from an specific user
const getUserBookings = (req, res) => {
  Bookings.where({ id: req.params.id })
    .fetch({ withRelated: ['users'] })
    .then((bookings) => {
      res.status(200).json({ bookings });
    });
};

//post newBooking
const newBooking = (req, res) => {
  new Bookings({
    user_id: req.params.id,
    date: req.body.date,
    description: req.body.description,
  })
    .save()
    .then((newBooking) => {
      res.status(200).json({ newBooking });
    });
};

//still need to be edited

const editBooking = async (req, res) => {
  await prisma.bookings
    .update({
      where: { id: Number(req.body.id) },
      data: { date: req.body.date, description: req.body.description },
    })
    .then((booking) => {
      res.status(201).json({ booking });
    })
    .catch((err) => {
      res.json({ err });
    });
};

// delete item

const deleteItem = async (req, res) => {
  await prisma.bookings
    .delete({ where: { id: parseInt(req.params.id) } })
    .then((booking) => {
      res.status(204).json({ msg: `Item with the ID ${booking.id} deleted` });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  getBookings,
  getUserBookings,
  newBooking,
  editBooking,
  deleteItem,
};
