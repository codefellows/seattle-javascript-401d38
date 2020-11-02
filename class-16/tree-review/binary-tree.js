class BinaryTree {

  inOrder() {

        /*

      
          left - root - right

                  A

          B             C

     D       E        F


     [D, B, E, A, F, C]
    */

    const values = [];

    function traverse(root) {

      // traverse left
      // add to values array
      // traverse right

    }

    traverse(this.root);



    return values;




  }

  preOrder() {

    /*

      

                  A

          B             C

     D       E        F


    */

  }

  postOrder() {

  }
}

class BinarySearchTree extends BinaryTree {

  constructor(root=null, compareFunction=null) {
    this.root = root;
    this.compareFunction = compareFunction; // allows for more complex notion of "greater than / less than"
  }

  add(value) {

    // wrap value up in a node and add to correct spot in tree
  
  }

  contains(value) {
    return true; // or false if not found
  }


}

class Node {

  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
}