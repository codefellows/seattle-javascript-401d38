'use strict';

// Riva: require the net library
const net = require('net');


// we create an instance of a TCP Client
const socket = new net.Socket();

// connect to our server

socket.connect({
  port: 3000,
  host: 'localhost',
}, (err) => {
  if (err) {
    console.error('something went wrong');
    return;
  }

  console.log('Connected to Hub Server');

  // immediately sends one event to our HUB
  console.log('sending pickup order to hub')
  socket.write(JSON.stringify({
    event: 'pickup',
    payload: 'Some flowers',
  }));
});

socket.on('data', (buffer) => {
  console.log(buffer.toString());
});
