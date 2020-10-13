'use strict';

function Notes(args) {
  this.id = Math.floor(Math.random() * 1000);
  this.text = args.payload;
}

Notes.prototype.execute = function (action) {
  if (action === '--add' || action == '-a') {
    return this.add();
  } else {
    console.error('bad action');
  }
};

Notes.prototype.add = function () {
  console.log('adding note', this.text);
}

module.exports = Notes;
