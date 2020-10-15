'use strict';


const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe( 'Testing note module for us', () => {
  it( 'console log is not called no command given', () => {

    let testNote = new Notes({ action: null});
    testNote.execute();

    expect(console.log).not.toHaveBeenCalled();


  });

  it( 'console log called when command given', () => {

    let testNote = new Notes({ action: '--add', payload: 'test'});
    testNote.execute();
    expect(console.log).toHaveBeenCalled();

  }); 

});