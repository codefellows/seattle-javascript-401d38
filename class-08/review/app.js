'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;

// what resource?  How can we talk to our 
//  products => grab all products restfully?

// our GET
function getAllProducts(req, res) {
  res.send([]);
}

function handleErrors(err, req, res, next) {
  console.log(err);
  res.status(400).send('Bad request');
}

app.get('/products', getAllProducts);

app.get('/products/:id', (req, res, next) => {
  const productId = req.params.id

  try {

    const product = findProductsById(productId);
    res.send(product);

  } catch (err) {

    next(err);

  }
});


app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
