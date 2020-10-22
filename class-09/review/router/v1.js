'use strict';

const express = require('express');
const Products = require('../models/products/product.collection.js');
const Categories = require('../models/categories/category.collection.js');

const router = express.Router();

function getModel(req, res, next) {
  console.log(req.params);
  // determine which model is needed, and attach to the request ( so it can be used in the handler);
  const model = req.params.model;

  switch (model) {
    case 'product':
      req.model = Products;
      next();
      break;
    case 'category':
      req.model = Categories;
      next();
      break;
    default:
      next('Invalid Model');
      break;
  }
}


router.param('model', getModel);

router.get('/api/v1/:model', (req, res, next) => {
  req.model.read()
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      next(err);
    });
});
router.post('/api/v1/:model', (req, res) => { });

module.exports = router;
