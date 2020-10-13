'use strict';

// not using this right now
const minimist = require('minimist');

// action and payload
// verify the argument
function Input(args) {
  this.action = this.isValid(args[2]);
  this.payload = args[3];
}

Input.prototype.isValid = function (arg) {

  if (arg === '--add' || arg === '-a') {

    return arg;

  } else {

    return null;

  }

}

module.exports = Input;
