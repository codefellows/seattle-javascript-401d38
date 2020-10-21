'use strict';

// Bring in the express framework
const express = require('express');

const app = express();

const userRouter = require('../routes/users.js');
// const productsRouter = require('../routes/products.js'); 

app.use(express.json());

app.use('/user', userRouter);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send('Try again');
});
// app.use('/products', )

module.exports = app;
