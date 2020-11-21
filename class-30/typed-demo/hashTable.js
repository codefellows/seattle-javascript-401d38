/**
 * Hash able implementation in JS
 */

class Hashtable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  // take in a key and return an index which will point to a bucket
  hash(key) {

    let sum = 0;
    // get sum of ascii values
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return (sum * 299) % this.size;
  }

  // places a value within our hashtable
  set(key, value) {

    let index = this.hash(key);
    console.log(index);
    if (!this.buckets[index]) {
      // If there is no values in our bucket yet, we must initialize our linked list;
      this.buckets[index] = new LinkedList();
    }

    this.buckets[index].add({ [key]: value });
    return this.buckets[index];
  }

  // return a boolean whether or not a value exists for a key
  contains(key) {

    let index = this.hash(key);
    let bucket = this.buckets[index];


    if (!bucket) {
      return false;
    }

    let current = bucket.head;
    while (current) {
      if (current.value[key]) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Fetching from our hashtable / bucket
  get() {

  }
}


/**
 * 
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  // @params {any} value
  //  for the use in a hashtable, how can we ensure that node values never have the same key?
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    // traversal
    while (current) {
      console.log(current);
      if (current.next === null) {
        current.next = newNode;
      }
      current = current.next;
    }
  }

  // let's add a method for grabbing values
  values() {

  }
}

class Node {
  constructor(value) {
    this.value = value; // for our hashtable values, this will be a key value pair
    this.next = null;
  }
}

const testTable = new Hashtable(1024);


testTable.set('Jacob', 'Instructor');
testTable.set('adrien', 'ta');


// let input = 'jacob';
// let output = 817;

// testTable.hash(input) === output;
// testTable.hash('Jacob');


if (testTable.contains('Jacob')) {
  console.log('Table can add correct key value pairs');
} else {
  console.log('somethings broke');
}

if (!testTable.contains('wrong')) {
  console.log('Table returns false when given a wrong key');
} else {
  console.log('something is broke');
}


// console.log(JSON.stringify(testTable));
