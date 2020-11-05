'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.emit('getPickups');

socket.on('pickup', order => {
  let { id } = order;
  console.log('incoming order ', order);
  socket.emit('in-transit', order);

  // we could emit this event from another client
  // superagent.post('http://localhost:3001').send({orderid: id})

  setTimeout(() => {
    console.log('order delivered');
    socket.emit('delivered', id);
  }, 1000);
});
