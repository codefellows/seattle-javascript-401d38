'use strict';

const categorySchema = require('./schema.js');
const MongoInterface = require('../mongo.js');

const CategoryInterface = new MongoInterface(categorySchema);

// class CategoryCollection extends MongoInterface

module.exports = CategoryInterface;
