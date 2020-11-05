'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3000;

const server = io(PORT);

server.on('connection', (socket) => {
  console.log('socket connected');
});

const caps = server.of('/caps');
caps.on('connection', (socket) => {
  console.log('Socket connected to caps server');

  socket.on('join', (room) => {
    console.log('Joining room: ', room);
    socket.join(room);
  });

  // .on specifies a reaction to a client event
  socket.on('pickup', (payload) => {
    console.log('Pickup event fired', payload);
    caps.emit('pickup', payload);
  });


  socket.on('in-transit', (payload) => {
    console.log('in-transit fired', payload);
    caps.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log('order delivered', payload);
    // what if we could garantee that this was devivered and removed from our queue?
    caps.emit('delivered', payload);
  });


});
