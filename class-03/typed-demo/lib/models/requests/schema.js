'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const RequestSchema = new Schema({
  method: { type: String, required: true, enum: ['GET', 'POST'] },
  url: { type: String, required: true },
  body: { type: String, required: false },
});

module.exports = RequestSchema;
