'use strict';

const schema = require('./user-schema.js');
const dataModel = require('./model.js');

class User extends dataModel { }


module.exports = new User(schema);
