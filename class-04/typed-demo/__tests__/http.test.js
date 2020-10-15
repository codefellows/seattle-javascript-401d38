'use strict';

const { expect } = require('@jest/globals');
const HTTP = require('../lib/http.js');

require('@code-fellows/supergoose');

// You'll want to add a describe block to give some background as to what is being tested
describe('Testing the http module', () => {
  it('should add a new request upon execution of the fetch method', () => {

    const request = new HTTP({ url: 'https://google.com', method: 'GET' });

    return request.fetch().then((savedRequest) => {
      expect(savedRequest.url).toEqual('HTTPS://GOOGLE.COM');
    });
  });

  it('should be able to list previous requests', () => {
    const request = new HTTP();

    return request.list().then(requests => {
      expect(requests.length).toEqual(1);
    });
  });
});
