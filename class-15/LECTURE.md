# Class 15: DSA Tree

## Introduction

- Abstract data structure.
- We experience trees already
  - DOM Tree
  - File Structure
- Still a collection of nodes
  - not sequential any longer
  - Each node now has a reference to multple other nodes

```html

<body>
  <div>
    <p>
  </div>
  <div>
  </div>
</body>

```

## Terminology

- Root: where the tree starts
- Binary Tree: A tree whose nodes only contain 2 references to other nodes, left and the right.
- LeftChild / Node: A node that's on the left side of it's parent node.
- RightChild / Node: A node that's on the right side of it's parent node.
- Parent: The Node directly above another node.
- Edge / Branch: what connects the parent and a child.
- Leaf: A node that has no children.
- Height: The number of edges from the root, to the furthest leaf.
  - Level: height + 1. 
- Binary Search Tree: A tree whose nodes are organized by value.
  - Lesser values go left.
  - Larger values go right.
- Recursive, any group of nodes from the tree could also their own tree.
  - There's always a place to begin that is a node, with the same properties.

## Uses

- Tree explain a lot of different of data
  - files system.

`cd Document/code-fellows/lab/index.js `

- How can we organize bets?
  - We can find numerical values really quickly with a BST

## Traversals

- How can we get to all of things in our data structure (tree).
- We often use recursion to traverse a tree.
  - What is Recursion?
  - A function that calls itself.
    - Using the call stack to place values that are waiting to be returned.
  - 2 general traversal methods
    - Depth First: focues on processing things on the way down, before moving to the left or right (before looking at everything on that levels)
      - Pre-Order: process that value of the **current** node, than move to the **left**, than the **right**.

```js

function preOrder(root) {

  let currentNode = root; // our beginning node

  // processCurrent First than the left, than the right

    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }

    // we nove current node to the left if it exists;
    if (currentNode.left) {
      preOrder(currentNode.left);
    }

    // we move current Node to the right if it exists;
    if (currentNode.right) {
      preOrder(currentNode.right);
    }

    return;
  }

}


```

      - In-Order: process the **left** first, followed by **current**, finishing with the **right**

```js

function inOrder(root) {

  let currentNode = root; // our beginning node

  // process left First than the currentNod, than the right

    // we nove current node to the left if it exists;
    if (currentNode.left) {
      inOrder(currentNode.left);
    }

    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }

    // we move current Node to the right if it exists;
    if (currentNode.right) {
      inOrder(currentNode.right);
    }

    return;
  }

}

```

      - Post-Order: 

```js

function postOrder(root) {

  let currentNode = root; // our beginning node

  // process left First than the currentNod, than the right

    // we nove current node to the left if it exists;
    if (currentNode.left) {
      postOrder(currentNode.left);
    }

    // we move current Node to the right if it exists;
    if (currentNode.right) {
      postOrder(currentNode.right);
    }

    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }

    return;
  }

}


```


    - Breadth First
