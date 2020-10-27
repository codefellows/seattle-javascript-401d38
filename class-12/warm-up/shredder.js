'use strict';


// input could be a CSS Selector or an Element or a list of Elements
function $$(selector) {

  if (typeof selector === 'string') {

    let elements = document.querySelectorAll(selector);

    let DOMList = new Nodes(elements);

    return DOMList;
  } else {
    if (Array.isArray(selector)) {

    } else {
      // this must be one element
      // console.log(document.getElementByName());
      let DOMList = new Nodes([selector]);
      return DOMList;
    }
  }
}

class Nodes {
  constructor(elements) {
    this.nodes = elements;
  }
}

// module.exports = $$;

