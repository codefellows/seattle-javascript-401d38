'use strict';

// Darius:

const net = require('net');

const socket = new net.Socket();

socket.connect({
  port: 3000,
  host: 'localhost',
}, () => {

  socket.on('data', (buffer) => {

    const message = JSON.parse(buffer.toString());
    console.log(message);

    if (message.event === 'order-ready') {
      socket.write(JSON.stringify({
        event: 'delivered',
        payload: message.payload,
      }));
    }
  });
});

