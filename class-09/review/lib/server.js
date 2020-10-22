'use strict';

require('dotenv').config();
const express = require('express');

// bring these in for now
// const ProductSchema = require('../models/products/schema.js');
// const MongoInterface = require('../models/mongo.js');

// const ProductInterface = new MongoInterface(ProductSchema);
const v1Router = require('../router/v1.js');

const app = express();


// fetch all of our products
// app.get('/product', (req, res) => {
//   ProductInterface.read()
//     .then(products => {
//       res.send(products);
//     });
// });
app.use(v1Router);


module.exports = {

  start: function (port) {
    app.listen(port)
  },

  // this is important for testing
  app: app,
}
