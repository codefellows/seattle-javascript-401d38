'use strict';

const Deque = require('./Deque');

/**
 *
 * Instatiate Deque and add test runners below
 *
 */

let dq = new Deque();

describe('Testing the Deque data structure', () => {

  // how methods work

  it('it should be able to add a node heading toward the left side of the Deque', () => {
    dq.enqueueLeft(1); // this adds one thing to the left side.
    expect(dq.left.value).toStrictEqual(1);
    expect(dq.length).toBe(1);
  });


  it('it should be able to add a node heading towatd the right side of the Deque', () => {
    dq.enqueueRight(2); // this adds one thing to the right side.
    expect(db.right.value).toStrictEqual(1);
    expect(db.left.value).toStrictEqual(2);
    expect(dq.length).toBe(2);
  });

  it('should be able to remove somethiing from the left side', () => {
    let removedValue = dq.dequeueLeft(); // removes a node from the left side
    expect(removedValue).toStrictEqual(2);
    expect(dq.length).toBe(1);
  });
});
