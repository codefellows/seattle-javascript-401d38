'use strict';

const Input = require('../lib/input.js');

describe('Testing the input module', () => {
  it('should return a new valid instance with action and payload', () => {

    let testArgs = { add: "feed dog" };

    let parsedInput = new Input(testArgs);

    expect(parsedInput).toEqual({ action: 'add', payload: 'feed dog' });
    expect(parsedInput.valid()).toEqual(true);
  });

  it('should return a false boolean when given bad inputs', () => {

    let testArgs = { wrong: 'bad action' };

    let parsedInput = new Input(testArgs);

    expect(parsedInput.valid()).toEqual(false);
  });
});
