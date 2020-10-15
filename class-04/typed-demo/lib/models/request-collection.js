'use strict';

const RequestModel = require('./request.js');

class RequestCollection {

  constructor() {
    this.model = RequestModel;
  }

  add(request) {
    const newModel = new this.model(request);
    return newModel.save();
  }

  list() {
    return this.model.find({});
  }

  update() {

  }

  delete() {

  }
}

module.exports = RequestCollection;
