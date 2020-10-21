'use strict';

// this software will consume a mongoose schema
// and ensure that proper mongoose methods are run when we want to do controller layer operations

class Mongo {

  constructor(schema) {
    this.schema = schema;
  }

  read(id) {
    if (id) {
      return this.schema.find({ _id: id });
    } else {
      return this.schema.find({});
    }
  }

  create(userObject) {
    const newUser = new this.schema(userObject);
    return newUser.save();
  }

  update() {

  }

  delete() {

  }
}

module.exports = Mongo;
