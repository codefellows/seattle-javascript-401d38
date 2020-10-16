// class for our Node

class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const newNode1 = new Node(1);
const newNode2 = new Node([1, 2, 3]);

// class for our Linked List

class LinkedList {

  constructor(head = null) {
    this.head = head;
  }

  traverse() {
    // set a variable to the very first node of the list
    let current = this.head;

    // start traversing with the while loop
    while (current) {
      console.log(current);
      current = current.next;
    }

    console.log('reached the end of the list');
  }

  // add a new value to our linked list
  add(valueToAdd) {
    let addedNode = new Node(valueToAdd);

    // we need to traverse
    let current = this.head;

    // start traversing with the while loop
    // when current is null ( we've reached the end )
    while (current) {

      //  we can add something right before we hit the end
      // current === null
      if (current.next === null) {
        current.next = addedNode;
        return this;
      }

      current = current.next;
    }
  }
}

const linkedlist = new LinkedList(newNode1);

linkedlist.add([1, 2, 3]);
linkedlist.add(4);
linkedlist.traverse();
console.log(linkedlist);
// this is very manual, let's do this as a method
// linkedlist.head.next = newNode2;
// linkedlist.head.next.next = new Node(5);

