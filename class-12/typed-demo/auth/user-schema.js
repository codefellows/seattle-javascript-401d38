'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
});

// let's ecrypt our password here on 'save'

UserSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});


// mongoose lets us add methods on both the schema and and instance of the schema

UserSchema.statics.authenticateBasic = async function (username, password) {

  // We need to return this promise in order to reach the return buried in the promise resolution ( getting to the .then )
  return this.findOne({ username })
    .then(async user => {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const token = await user.generateToken();
        return token;
      }
    });
}


UserSchema.methods.generateToken = async function () {
  let token = await jwt.sign({ username: this.username }, 'SECRET_STRING');
  return token;
}


module.exports = mongoose.model('Users', UserSchema);
