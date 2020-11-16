# Warm Up - TDD Deque

## Writing Tests for a `Deque` Data Structure.

Create tests for a class called `Deque`.   A `Deque` is a double ended queue, it can enqueue and dequeue at both ends.  As such it must maintain the ability to manage a sequence of nodes that can be added and removed from both ends of the structure.

Write tests that instantiate a `Deque` and assert that the following features are implemented into a `Deque`.

### Features

A `Deque` contains 3 properties

- left: References the Node at the left side of the `Deque`.
- right: References the Node at the right siude of the `Deque`.
- length: Returns an interger representing the total number of nodes within the `Deque`.
  
It also contains 7 methods

- EnqueueLeft: Adds a new Node heading toward the left side of the `Deque`.
- EuqueueRight: Adds a new Node heading toward the right side of the `Deque`.
- DequeueLeft: Removes and returns the Node from the left side of the `Deque`.
- DequeueRight: Removes and returns the Node from the right side of the `Deque`.
- isEmpty: Returns a boolean true or false whether there are any Nodes in the `Deque`.
- peekLeft: Returns the front of the left side of the `Deque`.
- peekRight: Returns the front of the right side of the `Deque`.

### Test Structure

Install jest and instantiate a `Deque` and use the following test suite to create your tests.

```javascript
const Deque = require('./Deque');

/**
 *
 * Instatiate Deque and add test runners below
 *
 */

describe('Testing the Deque data structure', () => {
  
});
```
