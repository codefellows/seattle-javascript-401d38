'use strict';


class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}



class Tree {
  constructor() {
    this.root = null;
  }


  preOrder(root) {

    let currentNode = root; // our beginning node

    // process Current First, than the left, than the right

    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }

    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }

    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.preOrder(currentNode.right);
    }

    return;
  }

  postOrder(root) {
    let currentNode = root; // our beginning node

    // process left first, than the right, than the current

    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.postOrder(currentNode.left);
    }

    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.postOrder(currentNode.right);
    }

    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }

    return;

  }

  inOrder(root) {
    let currentNode = root; // our beginning node

    // process left First than the currentNod, than the right
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.inOrder(currentNode.left);
    }

    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }

    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.inOrder(currentNode.right);
    }

    return;
  }
}

const tree = new Tree();

const Node1 = new Node(1);
const Node2 = new Node(2);
const Node3 = new Node(3);
const Node4 = new Node(4);

tree.root = Node1;
tree.root.left = Node2;
tree.root.right = Node3;
tree.root.right.left = Node4;

// console.log(tree);
tree.preOrder(tree.root);
