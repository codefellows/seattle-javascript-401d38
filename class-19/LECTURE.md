# Class 19

## Warm Up

- Breadth first traversal of a Binary Tree.
- Code Challenge 17


```js

// Riva: storing values from each level
// - Queue? Array?
// ordering first in first out

// Rizo: Queue Node class / Queue class

// Leah: track all children at a given level

function breadthFirst(bt) {

  const breadthQueue = [];

 // tree empty nothing to do
  if (!bt.root) {
    return null;
  } else {
    breadthQueue.unshift(bt.root);
  }


  let current = breadthQueue.pop();

  while (current) {

    // these are the steps that need to take place at each level
    if (current.left) {
      // breadthQueue.enqueue
      breadthQueue.unshift(current);
    }
    if (current.right) {
      // breadthQueue.dequeue
      breadth.unshift(current);
    }
    console.log(current.value);

   current = breadthQueue.pop();
  }

  return;
}

```

## Code Review

- Adding Socket.io to our TCP servers
- Where we've been
  - Node events module
    - Restricted to a single Node Process
    - Creates an instance of an event emitter and only that instance can control what happens when an events gets fired.
  - Net Node module which allows us to data between machines
    - Swapping the highly configirable node events with prescribed TCP events
      - data
      - connection
      - error
      - close
  - Socket.io library brings together our configurable events AND the full-duplex communication of TCP websockets.
    - Now we can define out won events.
    - We don't have to manage buffers, or manipulate javascript data types.

## Message Queues

- Queuing logic that will garantee delivery of our events to te different subscribers of our server.
- We need a way to store our events in a place waiting to be processed by other clients.
