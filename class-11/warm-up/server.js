'use strict';

const express = require('express');

const app = express();

// Why do we need this?
//  This parses the data coming into the route, and creates a body object for any JSON that is attached.
app.use(express.json());

const UserStorage = {};
const MessageStorage = {};

// const router = expresss.Router();

function logger(req, res, next) {

};

/**** CRUD for USERS *****/

// READ all the 'Users'
app.get('/users', (req, res, next) => {

});

// CREATE a single instance of 'Users'
app.post('/users', (req, res, next) => {
  req.body // this is not undefined when we use the express.json middleware;

});

// UPDATE a single user
app.put('/users/:id', (req, res, next) => {
  const id = req.params.id;

  // now that we have an id from the request. We have search / query / do something with the ID
});


// DELETE a single user
app.delete('/users/:id', (req, res, next) => {


});

// READ all the 'Users'
app.get('/users', (req, res, next) => {

});


/**** CRUD for MESSAGES *****/

// READ all messages
app.get('/messages', (req, res, next) => {

});

// CREATE a single instance of 'Messages'
app.post('/messages', (req, res, next) => {

});

// UPDATE a single Message
app.put('/messages/:id', (req, res, next) => {
  const id = req.params.id;

  // now that we have an id from the request. We have search / query / do something with the ID
});


// DELETE a single Message
app.delete('/messages/:id', (req, res, next) => {
  const id = req.params.id;

});

module.exports = app;
