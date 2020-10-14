'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const HTTP = require('./lib/http.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  const fetchFromGoogle = new HTTP({ url: 'https://google.com', method: 'GET' });
  fetchFromGoogle.fetch().then(request => console.log(request));
});
