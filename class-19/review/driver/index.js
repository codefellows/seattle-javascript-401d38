'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', (pickupInfo) => {

  setTimeout(() => {
    console.log('order in transit');
    socket.emit('in-transit', pickupInfo);
  }, 2000);

  setTimeout(() => {
    console.log('order delivered');
    socket.emit('delivered', pickupInfo);
  }, 3000);

});
