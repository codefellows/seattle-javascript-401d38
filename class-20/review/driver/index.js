'use strict';

const superagent = require('superagent');
const io = require('socket.io-client');

// connect to 
const socket = io.connect('http://localhost:3000');

// emulate a decision a human would make
socket.on('pickup', (payload) => {

  socket.emit('pickup', payload);

  // superagent.post('pickup').send(payload.id);

});

socket.on('in-transit', async (payload) => {

  const request = await superagent.post(`/delivered/${payload.storeId}/${payload.code}`);

  console.log(request.body);
});
