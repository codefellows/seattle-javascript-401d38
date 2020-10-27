// which auth features do we need to access from a route

const express = require('express');
const base64 = require('base-64');
const Users = require('./user-schema.js');

const authMiddleware = require('./middleware.js');

const router = express.Router();

router.post('/signin', authMiddleware.basic, (req, res, next) => {

  if (req.token) {
    // do specific signin stuff
    // we need to compare our password from header, with the password stored in database (encrypted)
    // use bcrypt to compare the original password with the password sent in a header

    // Basic =1876kjf8a7t76134=
    // const encodedPassword = req.headers.authorization.split(' ')[1];
    // const decodedPassword = base64.decode(encodedPassword);
    // const [user, pass] = decodedPassword.split(':');
    // console.log(user, pass);
    // Users.authenticateBasic(user, pass)
    //   .then(token => res.send(token))
    //   .catch(err => res.send(err));
    res.send(req.token);
  } else {
    res.status(401).send('hey, give me my auth headers');
  }

});


router.post('/signup', (req, res, next) => {
  const userData = req.body;
  const newUser = new Users(userData);
  newUser.save()
    .then(async user => {
      const token = await user.generateToken();
      res.send(token);
    })
});


module.exports = router;
