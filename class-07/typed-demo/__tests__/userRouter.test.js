'use srtict';

const supertest = require('supertest');

const app = require('../app.js');
// I need my express app, to pass into supertest

const testServer = supertest(app);

describe('Testing my express app', () => {
  it('should be able to handle a GET against /user', () => {

    return testServer.get('/user')
      .then(res => {
        expect(res.body).toEqual([]);
      });
  });

  it('should create a new user', () => {
    return testServer.post('/user')
      .send({ name: "Jacob" })
      .then(res => {
        expect(res.body.name).toEqual("Jacob");
      });
  });

  it('should return 1 user by id', () => {
    return testServer.get('/user/jacob')
      .then(res => {
        expect(res.body.name).toEqual('Jacob');
      });
  })
});
