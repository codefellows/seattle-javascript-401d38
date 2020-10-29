'use strict';

const express = require('express');
const mongoose = require('mongoose');
const ControlList = require('./auth/acl-middleware.js');
const bearerMiddleware = require('./auth/bearer-middleware.js');
const Users = require('./auth/users-schema.js');

const app = express();

app.use(express.json());

function handleGet(req, res, next) {
  res.send('You are authorized');
}

app.post('/signup', (req, res, next) => {
  const userData = req.body;
  const newUser = new Users(userData);
  newUser.save()
    .then(user => user.generateToken())
    .then(token => {
      res.send(token);
    })
    .catch(e => res.status(400).send('Working on it'));
});

app.get('/products', bearerMiddleware, ControlList('read'), handleGet);

app.get('/categories', bearerMiddleware, ControlList('write'), handleGet);

mongoose.connect('mongodb://localhost:27017/class14', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => {
    console.log('test');
    app.listen(3000, () => {
      console.log('Server listening on 3000');
    });
  }).catch(console.log);
