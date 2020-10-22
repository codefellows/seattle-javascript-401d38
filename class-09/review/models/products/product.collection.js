'use strict';

const ProductSchema = require('./schema.js');
const MongoInterface = require('../mongo.js');

const ProductInterface = new MongoInterface(ProductSchema);

module.exports = ProductInterface;
