'use strict';

class Input {

  constructor(args) {
    this.method = this.isValid(args.method) ? args.method : 'GET';
    this.url = args.url;
  }

  isValid(method) {
    if (method !== 'GET' || method !== 'POST') {
      return false
    }

    return true;
  }
}

module.exports = Input;
