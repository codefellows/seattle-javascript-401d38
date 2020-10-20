'use strict';

const express = require('express');

const userRouter = express.Router();

const users = [];

userRouter.get('/', (req, res) => {
  res.send(users);
});

// we can define parameters, whose value come from the request.
userRouter.get('/:id', (req, res) => {
  const userId = req.params.id;
  const queryResult = users.reduce((acc, val) => {
    console.log(val);
    if (val.name.toLowerCase() === userId) {
      acc = val;
    }
    return acc;
  }, {});
  res.send(queryResult);
});

userRouter.post('/', (req, res) => {
  users.push(req.body);
  res.send(req.body);
});

module.exports = userRouter;
