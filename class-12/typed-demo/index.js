'use strict';

// entry file
// connect our databse
// config any environment variables
// start our server

require('dotenv').config();
const server = require('./server.js');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {

    server.start(PORT);

  });
