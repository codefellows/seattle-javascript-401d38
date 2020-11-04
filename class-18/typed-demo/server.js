'use strict';

const io = require('socket.io');

const server = io(3000);

const vendorServer = server.of('/vendor');

const driverServer = server.of('/driver');

server.on('connection', (socket) => {
  console.log(`${socket.id} has connected`);

  // we can define our own events to emit / write to the clients

  // socket.emit('message', { payload: 'some text' });
  socket.on('message', (payload) => {
    console.log('socket sends a message', payload);

    // sends a message to all socket in the socket pool (except myself)
    socket.broadcast.emit('message', payload);
  });
});


vendorServer.on('connection', (socket) => {

  console.log(`vendor ${socket.id} connnected`);

});

driverServer.on('connection', (socket) => {

  console.log(`driver ${socket.id} connnected`);

});
