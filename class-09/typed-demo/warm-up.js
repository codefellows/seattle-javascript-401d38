'use strict';

const express = require('express');

const app = express();


// can we create a middleware
function adds() {

}

// 3 params exactly, or else we 404
app.get('/query/*', (req, res) => {
  console.log(req.params[0]);

  const numberString = req.params[0];

  const numberArray = numberString.split('/'); // => ['some', 'text', 'here']

  let sum = 0;

  numberArray.forEach(number => {
    sum = sum + parseInt(number);
  });

  res.send(`${sum}`);
});


app.get('/sub', (req, res) => {
  console.log(req.params);
  res.send('working on it');
});

app.listen(3000);
