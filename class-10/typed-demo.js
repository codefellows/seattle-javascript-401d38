'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

// something that just manages values using nodes
class Stack {

  constructor() {
    this.top = null;
  }

  // adding a value to our stack
  push(value) {

    const item = new Node(value);

    item.next = this.top;
    this.top = item;
  }

  // passing the value to something else.
  pop() {
    let temp = this.top;

    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.top.value
    }
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      false;
    }
  }
}


const testStack = new Stack();


testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);

// console.log(testStack.pop()); // 4
// console.log(testStack.top); // 3
// console.log(testStack.peek());


class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {

    const newNode = new Node(value);

    if (this.rear) {
      this.rear.next = newNode; // we would get a typeError => 
    }
    this.rear = newNode;

    if (!this.front) {
      this.front = this.rear;
    }
  }

  dequeue() {

    const temp = this.front;

    this.front = this.front.next;
    temp.next = null; // other languages need to manage their resources more closely, not JS tho.

    if (this.isEmpty()) {
      this.rear = null;
    }
    return temp.value;
  }

  peek() {
    if (!isEmpty()) {
      return this.front.value
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      false;
    }
  }
}

const testQueue = new Queue();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);

console.log(testQueue.front);
console.log(testQueue.rear);

console.log(testQueue.dequeue());
console.log(testQueue.dequeue());
console.log(testQueue.dequeue());
console.log(testQueue.dequeue());
console.log(testQueue.front);
console.log(testQueue.rear);

