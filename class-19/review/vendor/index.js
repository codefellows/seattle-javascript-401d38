'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

socket.emit('join', 'vendor-room');

socket.on('delivered', (payload) => {
  console.log('Thank you for delivery on order number', payload.orderId);
});

setInterval(() => {
  socket.emit('pickup', {
    store: 'Jacobs store',
    orderId: '12736871236',
  });
}, 1000);
