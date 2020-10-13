'use strict';

const minimist = require('minimist');
const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

let args = minimist(process.argv.slice(2));

const request = new Input(args);
const http = new HTTP();

http.fetch({
  method: request.method,
  url: request.url,
});

console.log(http.response);
