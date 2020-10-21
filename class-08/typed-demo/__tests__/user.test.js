'use strict';

const supergoose = require('@code-fellows/supergoose');
const app = require('../lib/app.js');

const testServer = supergoose(app);

describe('tests the user controller and data layer', () => {

  // beforeAll

  it('should return a new user on POST /user', () => {

    return testServer.post('/user')
      .send({ "name": "Tester" })
      .then(res => {
        expect(res.status).toStrictEqual(200);
        expect(res.body._id).toBeTruthy();
        expect(res.body.name).toStrictEqual('Tester');
      })
  });

  it('should return the user we just made when I GET from /user/id', () => {
    return testServer.get(`/user`)
      .then(res => {
        expect(res.status).toStrictEqual(200);
        expect(res.body.length).toStrictEqual(1);
        // expect(res.body[0]._id).toStrictEqual(userId);
        // expect(res.body[0].name).toStrictEqual('Tester');
      });
  });
});
