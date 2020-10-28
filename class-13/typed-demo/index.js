'use strict';

require('dotenv').config();
const express = require('express');
const authRouter = require('./src/auth/router.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use(authRouter);
app.use(cors());

mongoose.connect('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => {
    app.listen(3000, () => {
      console.log('Auth Running!');
    });
  });


