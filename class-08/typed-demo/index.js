'use strict';

// initialize our entry file and configure our env variables
require('dotenv').config();
const app = require('./lib/app.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const DB_URI = process.env.MONGODB_URI;

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('db connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
