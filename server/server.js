const express = require('express');
const app = express();
const usersRoute = require('./routes/users');
const bookingsRoute = require('./routes/bookings');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5001;
const middleware = require('./middleware/auth');

app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);
app.use('/bookings', bookingsRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost/${PORT}`);
});
