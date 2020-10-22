'use strict';

const server = require('../lib/server.js');

const supergoose = require('@code-fellows/supergoose');

// supergoose needs to consume a express app
const testServer = supergoose(server.app);

// import the controller, and add a product via the controller not the router
const ProductCollection = require('../models/products/product.collection.js');
const CategoryCollection = require('../models/categories/category.collection.js');

describe('Testing the app', () => {

  let testProduct = null;
  let testCategory = null;

  beforeAll(async () => {
    // create one product
    testProduct = await ProductCollection.create({
      name: "test",
      description: 'Some string for testing',
      display_name: 'test',
      category: 'Category 1',
    });
    testCategory = await CategoryCollection.create({
      name: 'Category 1',
      description: 'Here is a category',
      display_name: 'category1',
    });
  });


  it('should return some products', () => {

    return testServer.get('/api/v1/product')
      .then(response => {
        // user = response.body
        console.log(response.body[0]);
        expect(response.body.length).toBe(1);
        expect(response.body[0].name).toBe('test');
        expect(response.body[0].category_data).toBeTruthy();
      });
  });
});
