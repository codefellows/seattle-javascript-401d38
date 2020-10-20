'use strict';

const express = require('express');

const app = express();
const userRouter = require('./routes/user.js');
const loggingMiddleware = require('./middlewares/logger.js');


// We need to tell express, that data will be coming in as json, and it should be attached to the request object
app.use(express.json());
app.use(loggingMiddleware);

// use method is very versatile, it let's us add any functions to the entire application.
app.use('/user', userRouter);

// common express syntax
//  specify the HTTP method on the express object
//  provide a path and a function to run.
// app.get('/', (request, response) => {
//   response.send('you just ran a GET on "/"');
// });

module.exports = app;
