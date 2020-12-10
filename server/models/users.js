const bookshelf = require("../bookshelf");

const Users = bookshelf.model("Users", {
  tableName: "users",
  bookings: function () {
    return this.hasMany("Bookings");
  },
});

module.exports = Users;
