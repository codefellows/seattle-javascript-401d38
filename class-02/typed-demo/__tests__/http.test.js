'use strict';

const { expect } = require('@jest/globals');
const HTTP = require('../lib/http.js');

describe('Testing the http module', () => {
  it('should modify a response object', () => {
    const http = new HTTP();

    http.fetch({ method: 'POST', url: 'http://google.com' });

    expect(http.response).not.toBe(null);
    expect(http.url).toBe('http://google.com');
  })
})
