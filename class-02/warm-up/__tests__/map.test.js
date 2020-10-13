'use strict';

const $$ = require('../$$.js');

describe('Testing the shredder library map method', () => {
  it('should return a new array', () => {
    // create our test structure
    let array = [1, 2, 3, 4];

    // our resulting structure to compare with our test;
    let resultArray = $$.map(array, (val, idx) => {
      return val * val;
    });

    // comparing result to expected test result
    expect(resultArray).toEqual([1, 4, 9, 16]);
  });
});
