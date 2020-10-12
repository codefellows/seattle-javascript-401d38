'use strict';

const person = require('./lib/person.js');
const superagent = require('superagent');

console.log(process.argv[2]);

superagent.get(`https://google.com/?query=${person.name}`)
  .then((response) => console.log(response.body))
  .catch(console.error);

console.log(person);
