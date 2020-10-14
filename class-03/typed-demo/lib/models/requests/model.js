'use strict';

const mongoose = require('mongoose');
const RequestsSchema = require('./schema.js');

module.exports = mongoose.model('Requests', RequestsSchema);
