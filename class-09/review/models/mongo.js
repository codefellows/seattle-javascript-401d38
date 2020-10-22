'use strict';

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

  create(object) {
    const newEntity = new this.schema(object);
    return newEntity.save();
  }

  update(id) {

  }

  delete(id) {

  }
}

module.exports = Mongo;
