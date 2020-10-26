'use strict';

const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Why do we need this?
//  This parses the data coming into the route, and creates a body object for any JSON that is attached.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserStorage = {};

// Method for saving a new user
UserStorage.save = async function (username, password) {

  const hashedPassword = await bcrypt.hash(password, 10); // params: string to encrypt / salt: the number of times we run our input

  // we have big long string that is considered secure
  console.log(hashedPassword);

  this[username] = {
    username: username,
    password: hashedPassword,
  }
}

// method for creating a JWT
UserStorage.generateToken = function (username) {
  let token = jwt.sign({ username: username }, 'SECRET_STRING'); // takes an object to encode into the token and a secret string for verification
  return token;
}

UserStorage.authenticateBasic = async function (user, pass) {
  // return bcrypt.compare(pass, this[user].password)
  // .then()
  // .catch()
  // compare the decoded base64 password, with the password that is saved for the 'user' in the DB.
  let isValidPassword = await bcrypt.compare(pass, this[user].password);
  console.log(isValidPassword);
  if (isValidPassword) {
    return this.generateToken(user);
  } else {
    // return the Promise.reject method 
    return Promise.reject('no user found');
  }
}

const MessageStorage = {};

// const router = expresss.Router();

function logger(req, res, next) {

};

/** AUTH Routes */
// both of these routes end with the creation of a 'token'

app.post('/signin', (req, res, next) => {

  console.log(req.headers.authorization);

  // we could include these feature as middleware
  const decodedString = base64.decode(req.headers.authorization.split(' ')[1]);

  // short hand destructuring
  let [user, pass] = decodedString.split(':');
  // let user = decodedString.split(':')[0];
  // let pass = decodedString.split(':')[1];
  console.log(user, pass);
  UserStorage.authenticateBasic(user, pass)
    .then(token => {
      res.send(token);
    })
    .catch(err => {
      console.log(err);
      res.status(401).send("Unauthorized");
    });
});


app.post('/signup', (req, res, next) => {

  // this is unique to this route
  const userCreds = req.body;
  // userCreds.username;
  // userCreds.password;
  UserStorage.save(userCreds.username, userCreds.password)
    .then(() => {
      const token = UserStorage.generateToken(userCreds.username);

      // once we generate this, we send this to our client for any subsequent requests.
      res.send(token);
    });
});


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
