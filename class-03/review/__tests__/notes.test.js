'use strict';

const { expect } = require('@jest/globals');
const Notes = require('../lib/notes.js');

// create a spy that internally track the js engine calls to this function;
jest.spyOn(global.console, 'log');

describe('Testing the notes module', () => {
  it('console log does not get called with no command given', () => {
    let testNote = new Notes({ action: null });
    testNote.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('console log is called when a valid command is given', () => {

    let testNote = new Notes({ action: '--add', payload: 'test' });
    testNote.execute();
    expect(console.log).toHaveBeenCalled();
  });
});
