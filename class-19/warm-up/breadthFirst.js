'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BT {
  constructor() {
    this.root = null;
  }
}

const tree = new BT();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.right = new Node(4);
tree.root.left.left = new Node(5);

breadthFirst(tree); // 1 => 2 => 3 => 5 => 4

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
      breadthQueue.unshift(current.left);
    }
    if (current.right) {
      // breadthQueue.dequeue
      breadthQueue.unshift(current.right);
    }
    console.log(current.value);

    current = breadthQueue.pop();
  }

  return;
}
