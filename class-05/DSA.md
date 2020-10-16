# DSA: Linked Lists

## Introduction

- What is a Linked List?
  - **A sequence of Nodes, that connected/linked to one another.**
  - A link for a website, that you click on?
  - List / series of Nodes.
    - A bunch of nodes.
  - A way of organizing connected ideas / objects.
    - How would you store connected information in JS, if there was no Array or Object.
    - This is maybe an Alternative.
  - Much more important for other older languages.
    - Langauges like C# and Java, don't have arrays.


- What is a Node?
  - Is a Node an object, *In JS, yeah probably*
  - Individual item/link that lives in a linked list.
    - It contains a property, next, which reference the next Node in a Linked List.

## Terminology

- Linked List: A sequence of Nodes, that connected/linked to one another.
- Singly Linked List: Each Node can only reference the `next` node, and no other Node in the list.
- Doubly Linked List: Each Node contains a reference to 2 Nodes, `next` and typically a `previous`.
- Node: Individual item/link that lives in a linked list
- Next: The property on a Node that references another node in the list.
- Head: The very first node of the linked list.
- Current: Reference to a node that is being operated on.
  - value: This is typically any other data that the Node specifies.

## Traversal

- What is traversal?
  - Refers to the ability to see every piece of data inside a linked list.
  - In an array we use a for loop?
  - For a linked list we need to assert that a next value lives at the Head.
    - While there is a property on the current node, we move to the next node.

```js

// javascript traversals
function traversal(LinkedList) {

  // set a variable to the very first node of the list
  let current = LinkedList.head;

  // start traversing with the while loop
  while (current) {
    for (let i = 0; LinkedList.length; i ++) {
      console.log(current.value);
      current = current.next;
    }
  }

  console.log('reached the end of the list');
}

```

## Big 0

- O(n) : ( n refers to the number of references / inputs ).
  - Your efficiency has linear realtionship with it's inputs.
  - Use this notation to analyze both space and time.
- O(1)
  - We have constant space / time
- O(n^5)
- O(logN)

- Effeciecy metric, on a very general basis, how fast, and many resources (variables) does a data structures methods requires, given its inputs.
  - Our function creates 2 variables.
  - Always take into account the worst case scenarios.
- If we're trying to implrove specific efficeincy => Big Theta.
