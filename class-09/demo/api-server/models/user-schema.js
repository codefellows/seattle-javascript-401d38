'use strict';

const mongoose = require('mongoose');

const user = mongoose.Schema({
  name: { type: String, required: true },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

user.virtual('food', {
  ref: 'food',
  localField: '_id',
  foreignField: 'userId',
  justOne: false
});

user.pre('find', async function () {
  try {
    this.populate('food');
  } catch (e) {
    console.log(e);
  }
});

module.exports = mongoose.model('users', user);
