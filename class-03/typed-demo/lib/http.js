'use strict';

const Request = require('./models/requests/model.js');

class HTTP {
  constructor(options) {
    this.method = options.method || 'GET';
    this.url = options.url;
    this.body = options.body;
  }

  fetch() {
    const newRequest = new Request(this);
    return newRequest.save();
  }
}

module.exports = HTTP;
