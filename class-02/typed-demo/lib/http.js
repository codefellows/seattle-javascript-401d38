'use strict';

class HTTP {

  constructor() {
    this.url = null;
    this.response = null;
  }

  fetch(options) {
    if (options) {
      this.url = options.url;
      this.response = {
        count: 2,
        results: [
          { name: 'Jacob', role: 'instructor' },
          { name: 'Chance', role: 'ta' },
        ]
      }
    }
  }
}

module.exports = HTTP;
