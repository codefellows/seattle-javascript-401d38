'use strict';

const express = require('express');
const authRouter = require('./auth/router.js');

const app = express();

const authMiddleware = require('./auth/middleware.js');

app.use(express.json());
app.use(authRouter);

// This route is protected by beare middleware
app.get('/messages', authMiddleware.bearer, (req, res, next) => {
  res.send('Working on it');
});

module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log('Server is listening on port ' + port);
    });
  },
}
