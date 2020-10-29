'use strict';

const Users = require('./users-schema.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  Users.authenticateToken(token)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(e => {
      console.log(e);
      next('Unauthorized');
    });
}
