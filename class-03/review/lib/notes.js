'use strict';

class Notes {

  constructor(object) {
    this.action = object.action;
    this.payload = object.payload;
  }

  execute() {
    if (this.action === '--add' || this.action === '-a') {
      this.add();
    }
  }

  add() {
    console.log(this.payload);
  }
}

module.exports = Notes;
