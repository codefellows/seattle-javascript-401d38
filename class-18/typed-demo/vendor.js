// socket.io facilates a web socket connections
// an upgraded TCP  socket

const ioClient = require('socket.io-client');

const socket = ioClient('ws://localhost:3000');

socket.on('connect', () => {

  // socket.emit lets us define our own event and pass down to the server.
  socket.emit('message', { event: 'pickup', payload: 'some flowers' });
});

