const bookshelf = require("../bookshelf");

const Bookings = bookshelf.model('Bookings',{
    tableName = 'bookings',
    users: function (){
        return this.belongsTo('Users');
    },
});
module.exports = Bookings;
