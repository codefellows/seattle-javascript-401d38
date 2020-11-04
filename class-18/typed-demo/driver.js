'use strict';

const ioClient = require('socket.io-client');


// here we can listen and emit for global server events
const socket = ioClient('ws://localhost:3000');


// this will just monitor driver namespace events
const driverSocket = ioClient('ws://localhost:3000/driver');

driverSocket.on('message', (payload) => {

  console.log('driver receiving message');

});

socket.on('message', () => {
  console.log('global socket server');
});
