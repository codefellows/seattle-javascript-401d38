'use strict';

// spencar: we need our net library and we need to be able to start a TCP server in our HUB
const net = require('net');

const server = net.createServer(); // Our TCP server instead of an HTTP server

server.listen(3000, () => {
  console.log('TCP server open on port ', 3000);
});

let socketPool = {};

// The first thing that occurs
server.on('connection', (socket) => {
  console.log('socket connected');
  let socketId = `SOCKET-${Math.floor(Math.random() * 10000)}`;

  socketPool[socketId] = socket;

  // define events on the socket object;
  socket.on('data', (buffer) => {
    console.log(buffer.toString());

    let socketEvent = JSON.parse(buffer.toString());

    if (socketEvent.event === 'pickup') {
      let socketArray = Object.keys(socketPool);

      for (let socketId of socketArray) {
        console.log(socketId);
        socketPool[socketId].write(JSON.stringify({
          event: 'order-ready',
          payload: socketEvent.payload,
        }));
      }
    }

  });

  socket.on('close', () => {
    console.log('socket disconnected');

    // we need to remove socket connection here to prevent sockets to have duplicate references in the socket pool
  });

});

// Rizo; the first CAPS event


// TCP events are standardized
// connection
// data
// disconnect
// error
// server.on('data', (buffer) => { // Connections want to gaurantee successful data transter, usualyy unicode bytes.

//   // what is this buffer?
//   const stringData = buffer.toString();
//   // this is a very very small amount of info that represents a chunk of this incoming information.

//   console.log(stringData);
// });
