'use strict';

const mongoose = require('mongoose');

// this is called de-structuring => mongoose.Schema
const { Schema } = mongoose;

const RequestSchema = new Schema({
  url: { type: String, required: true },
  method: { type: String, required: true, enum: ['GET', 'POST'] },
  body: { type: String, required: false },
});

// Mongoose lifecycle Methods
// ways to interact with our data before / after a mongo operatoin has completed

RequestSchema.pre('save', function () {
  // the things that was saved.
  console.log(this);
  this.url = this.url.toUpperCase();
});

module.exports = mongoose.model('Request', RequestSchema);
