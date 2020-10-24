# Class 10: Stack and Queues

- Both of these are derivations of a linked list.
  - A linear sequence of nodes.

## Stacks

- The behavior of a stack differs from a linked list in that you can only access nodes at the "Top" of the stack.
- You "push" new things down to replace the top value.
- The node is the exact same. Still contains a value and a next property.

### Terminology

- Top: the node that was last "pushed", the beginning of our stack. Like the "head" of a linked list.
- Push: The act of adding something to the stack, whatever is pushed replaces the "top" property.
- Pop: the act of removing something from the stack, returns the "Top" value.
- Peek: what is on the top of the stack. returns the value of the 'top' node.
- isEmpty: returns true when the stack is empty (when top is null)
- FILO / LIFO (First in last out) / (Last in first out)

- Adding to the Stack (pushing)
  - Not only doo we need to reassign the top, but also have to switch the connecting properties.
    - Create a new Node
    - Assign the new Node next prop to this.top
    - Reassign this.top to our new Node.
- Removing from the stack (Poping)
  - create a temp node from top
  - reassign this.top to top.next
  - Remove temp.next, by setting to null
  - return temp node value

## Queue

- The behavior of a queue differs from a linked list in that you can only access nodes from the "front" of the Queue.
- Add to the "rear', also kmow as "enqueuing"
- Still a sequence of node
  - Node still have our value and next

### Terminology

- Front: the beginning of our Queue, this is where things are "dequeued"
- Rear: the end of the Queue, this is where things are "Enqueued"
- Enqueue: Adding a value to the rear of the queue
  - Create a new node.
  - Reassing the next property of the rear to our new node.
  - Reassign the rear property itself to the new node.
  - If there is no front, assign the new Node to front.
- Dequeue: Removing a value from the front of the queue, returning the value.
  - Make a temp node
  - Move the front property to the next node.
  - Set temp next property to null.
  - and return the temp nodes value.
- Peek: looking at what's in front.
  - return whatever value exists in the front node.
  - return either a value or null.
- FIFO / LILO (First in First out) / ( Last in last out )
