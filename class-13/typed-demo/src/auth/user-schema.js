'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: false }
});

UserSchema.pre('save', async function () {
  // 'this refers to a user created on 'save'
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// ask jwt to encode some user info and generate the token
UserSchema.methods.generateToken = async function () {
  let token = await jwt.sign({ username: this.username }, 'SECRET_STRING');
  return token;
}

UserSchema.methods.comparePasswords = async function (password) {
  let isValid = bcrypt.compare(password, this.password);
  if (isValid) {
    return this
  }
  return isValid;
}

module.exports = mongoose.model('Users', UserSchema);
