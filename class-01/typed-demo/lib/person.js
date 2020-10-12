'use strict';

// const animal = require('./animal.js');

const person = {
  name: 'Jacob',
}

person.walk = function () {
  return `${this.name} is walking`;
}

module.exports = person
