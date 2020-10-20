'use strict';

function loggingMiddleware(req, res, next) {
  console.log(`The ${req.path} route was hit, using the ${req.method} method`);
  // call next within a piece of middleware to move to the next function in line to run
  next();
};

module.exports = loggingMiddleware;
