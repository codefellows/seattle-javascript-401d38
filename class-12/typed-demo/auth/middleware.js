'use strict';

const base64 = require('base-64');
const Users = require('./user-schema.js');
const jwt = require('jsonwebtoken');

module.exports = {
  basic: async (req, res, next) => {

    if (req.headers.authorization) {

      const encodedPassword = req.headers.authorization.split(' ')[1];
      const decodedPassword = base64.decode(encodedPassword);
      const [user, pass] = decodedPassword.split(':');

      let token = await Users.authenticateBasic(user, pass);
      req.token = token;
      next();
    } else {
      next('Unautorized');
    }

  },

  bearer: async (req, res, next) => {

    if (req.headers.authorization) {

      const encodedToken = req.headers.authorization.split(' ')[1];

      // check to make sure the token is valid
      try {
        let isValidToken = await jwt.verify(encodedToken, 'SECRET_STRING');
        console.log(isValidToken);
        next();
      } catch (e) {
        next(e);
      }
    } else {
      next('Unauthorized');
    }

  },
}
