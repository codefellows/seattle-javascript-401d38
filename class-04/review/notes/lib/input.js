'use strict';

class Input {
  constructor(array) {
    this.action = array[2];
    this.payload = array[3];
    this.category = array[5];
  }

  valid() {
    if (this.action !== '-a' && this.action !== '--add' && this.action !== '-d' && this.action !== '--delete' && this.action !== '--list') {
      console.log('please enter a valid command');
      return false;
    } else {
      return true;
    }
  }
}


module.exports = Input;


// This is lab one code

// const minimist = require('minimist');

// function Input(args) {

//   this.action = this.isValid(args[2]);
//   this.payload = args[3];

// }

// Input.prototype.isValid = function(arg) {
//   if (arg === '--add' || arg === '-a'){
//     return arg;

//   } else

//   { return new Error('Invalid command input');

//   }


// };

// module.exports = Input;

