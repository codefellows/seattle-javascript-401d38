'use strict';

const Input = require('../lib/input.js');

describe('lets check if input is valid', () => {
  test('It should return truthy if value is good', () => {

    let a = new Input([0, 1, '-a', 'Hello World']);
    expect(a.valid()).toStrictEqual(true);
    let add = new Input([0, 1, '--add', 'Hello World']);
    expect(add.valid()).toStrictEqual(true);

  });

  test('a new note has an action and payload', () => {

    let aNote = new Input([0, 1, '-add', 'Has a text']);
    expect(aNote.action).toStrictEqual('-add');
    expect(aNote.payload).toStrictEqual('Has a text');

  });

  test('An invalid entry gives a falsy', () => {
    let bad = new Input(['-bad', 'no such command']);
    expect(bad.valid()).toStrictEqual(false);
    let bad2 = new Input(['--bad2', 'still bad']);
    expect(bad2.valid()).toStrictEqual(false);
  });
});
