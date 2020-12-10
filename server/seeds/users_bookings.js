const usersData = require("../seed_data/1_users");
const bookingsData = require("../seed_data/2_bookings");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(usersData);
    })
    .then(() => {
      return knex("bookings").del();
    })
    .then(() => {
      return knex("users")
        .pluck("id")
        .then((userIds) => {
          return userIds;
        });
    })
    .then((userIds) => {
      const bookingsDataWithUsersId = bookingsData.map((booking) => {
        booking.users_id = userIds[Math.floor(Math.random() * userIds.length)];
        return booking;
      });
      return knex("bookings").insert(bookingsDataWithUsersId);
    });
};
