'use strict';

// const RequestModel = require('./models/request.js');
const RequestCollection = require('./models/request-collection.js');
const RequestInterface = new RequestCollection();

class HTTP {

  constructor(options = {}) {
    this.url = options.url;
    this.method = options.method;
    this.body = options.body;
  }

  fetch() {
    return RequestInterface.add(this);
  }

  list() {
    return RequestInterface.list();
  }
}

module.exports = HTTP;
