'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: false },
  role: { type: String, required: true, enum: ['user', 'admin', 'editor', 'user'] }
});

// Map of roles to capabilites, assigned to our token that we give the client
const capabilities = {
  admin: ['read', 'create', 'update', 'delete'],
  writer: ['read', 'create'],
  editor: ['read', 'update'],
  user: ['read'],
}

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

UserSchema.statics.authenticateToken = async function (token) {

  let isValid = await jwt.verify(token, 'SECRET_STRING');
  if (isValid) {
    // {username | capabilites}
    return isValid;
  }

  return Promise.reject('false');
}

UserSchema.methods.generateToken = async function () {

  try {
    let token = await jwt.sign({
      username: this.username,
      capabilities: capabilities[this.role],
    }, 'SECRET_STRING');
    return token;
  } catch (e) {
    console.log(e);
    return Promise.reject('Token error');
  }
}

module.exports = mongoose.model('Users', UserSchema);
