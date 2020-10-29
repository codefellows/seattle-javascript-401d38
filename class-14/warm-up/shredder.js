'use strict';

/**
 * @param {String | DOMElement | Array} selector 
 */
function $$(selector) {

  let element = new DOMList(document.getElementsByTagName(selector)[0]);

  return element;
}

/**
 * @param {} 
 */
class DOMList {
  constructor(element) {
    this.element = element;
    this.nodes = [];
  }

  on(event, callback) {
    // adding an event listener
    this.element.addEventListener(event, () => callback(this.element));
  }
}
