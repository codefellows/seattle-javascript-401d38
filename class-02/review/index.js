'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input(process.argv);

if (input.action) {
  let note = new Notes(input);
  note.execute(input.action);
} else {
  throw new Error('invalid action');
}
