# Class 30: DSA Hash Tables

## Intro

- Linked Lists (Stacks & Queues) / Trees
- Hierarchy of nodes.
  - Binary trees
- Hash Table is leaving the notion of a hierarchy and coming to a place of addresses.
  - Hash tables exist to help us look stuff up.
    - Really fast lookup time when compared to trees / linked lists.
      - 0(1) time.
      - 0(N) space.
    - Not really a great way to search for something in a hash table.

## What is a Hash Table

- A library
  - Dewey Decimal System.
- Looking up a user in storage
- Javascript script object.
  - This is a table / map, but it doesn not nececarilly hash.

## Terminology

- Hash / Hashing: Taking a value and producing another value that can be used for storage / secruity / some other purpose.  For a hash table specifically it's an index that points to a bucket.
  - All hashing structures have a special way of coming up with index (address);
  - Keys can be anything, but on hash they are reduced to strings.
- Size: the number of buckets the table has.
- Bucket: Some structure that holds values in a hash table. References by an index.
  - array
  - linked list
- Collisions: Hashing a new item in our table which produces an index that already has something there
  - How can we deal with this?
    - Make a linked list?
    - Why would use a linked list?
      - dynamic, there meant to be added.
      - in other languages, arrays are not dynamic.

{
  [...]
  [120983]: {"key": "some value"} -> {"key": "some other value"}
  [...]
}

## Hashing Algorithm

- try to take a value as a 'string' and create an address in our structure (Array);
- decide how many buckets we want?
  - new Array(1024)
  - Whatever we want, we instantiate and array of the size

```java
[
  [0]: null
  [1]: null
  ...
  ...
  ...
  [1023]: null
]
```

- If we want to add something to this list we need to reduce that string to our address index
- "super secret" -> 0 - 1023 | value => "secret value"
  - convert our string to a number
    - reducing each character to a acsii value
    - we then take the sum of all those values and we multiple by some rather large number.
    - Use modulo to divide by the number of buckets and get the remainder => index / address

```java
key = 'jacob'
value = 'instructor'

// 1) key ascii values from 'j' 'a' 'c' 'o 'b'
106 + 97 + 99 + 111 + 98 = 511

// 2) multiply by some large number (this step will vary heavily depending on use case)
511 * 299 = 152789

// 3) Modulo by our table size to get our index value
152789 % 1024 = 213
```

```java
  [0]: null
  [1]: null
  ...
  ...
  ...
  [213]: {jacob:instuctor} -> null
  ...
  ...
  ...
  [1023]: null
```

## Collision

- A good hash table can always deal with values that hash to the same address
- Two values both return the index: 213
  - jacob:instructor
  - adrien: ta
- if you have duplicate keys
  - jacob:ta
  - the most common way to address is to overwrite.
  - If you don't want this to happen throw an arror.

```java
  [0]: null
  [1]: null
  ...
  ...
  ...
  [213]: {jacob:ta} -> {adrien:ta} -> null
  ...
  ...
  ...
  [1023]: null
```

## Methods

- Add / Set / Put: takes in a key and a value and places it at an index in the hashtable.
- Hash / getHash: This will take in a key, and will return an index using whatever algorithm is needed.
- Find / Get: This takes a key, and returns the value stored at the given for that specific key.
- Contains / Includes: Takes a key and returns a boolean whether or not there is a value stored for the given key.
