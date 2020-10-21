'use strict';

const UserSchema = require('../models/user/schema.js');
const MongoInterface = require('../models/mongo-interface.js');

const UserInterface = new MongoInterface(UserSchema);

// router.use('/users');
// const users = [];

module.exports = {
  getOne: function (req, res, next) {

    try {

      const userId = req.params.id;
      UserInterface.read(userId)
        .then(user => res.send(user))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }
  },

  getAll: function (req, res) {

    UserInterface.read()
      .then(users => {
        res.send(users);
      });

    // res.send(users);
  },

  createOne: function (req, res, next) {

    try {

      const userFromRequest = req.body;

      UserInterface.create(userFromRequest)
        .then(user => res.send(user))
        .catch(err => next(err));

    } catch (err) {

      next(err);

    }

  },

  updateOne: function () {

  },

  replaceOne: function () {

  },

  deleteOne: function () {

  },
}


