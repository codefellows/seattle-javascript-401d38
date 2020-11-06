// we need to provide a route for both

const express = require('express');
const io = reqiure('socket.io-client');

const app = express();
const socket = io.connect('http://localhost:3000');
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('delivery/:storeId/:code', (req, res, next) => {

  const { storeId, code } = req.params;

  socket.emit('delivered', {
    store: storeId,
    code: code,
  });

  res.send(`Order for ${store} with order number ${code} was devlivered`);
});

// maybe we need this? Depends on how the driver wants to interface with the seperate pieces of our system.
app.post('/pickup', (req, res, next) => {

});

app.listen(PORT);
