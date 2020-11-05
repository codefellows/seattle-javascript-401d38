'use strict';

const io = require('socket.io');
const PORT = process.env.PORT || 3000;

const server = io(PORT);

/**
 * for lab our queue might look something like this
 * queue = {
 *  clientId: {
 *    orderId: {},
 *    orderId: {}
 *  },
 *  clientId: {
 *    ...
 *  }
 * }
 */

const queue = {
  pickup: {},
  inTransit: {},
}

server.on('connection', (socket) => {

  // socket.on('is-typing')

  // let's queue up an order into the in transit queue
  // order comes in as 'payload'
  socket.on('pickup', payload => {
    let id = Math.floor(Math.random() * 10000000);

    // add something to a queue;
    queue.pickup[id] = payload;
    console.log(queue, payload);
    socket.broadcast.emit('pickup', { id, payload });
  });

  socket.on('in-transit', order => {
    let { id, payload } = order;

    // remove from one queue and put into another
    delete queue.pickup[id]; // remove from pickup
    queue.inTransit[id] = payload; // add to in transit


    console.log(queue);
    socket.broadcast.emit('in-transit', payload);
  })

  // fetch all pickup order within the queue
  socket.on('getPickups', () => {
    // each order is organized by id
    Object.keys(queue.pickup).forEach(id => {
      socket.emit('pickup', { id, payload: queue.pickup[id] })
    });
  });

  // maybe we think about if things are already in transit 
  // socket.on('getIntransit', () => {
  //   can we emit all of the things already queued in transit
  // })

  // remove an item from the in-transit queue
  socket.on('delivered', (orderId) => {
    delete queue.inTransit[orderId];
    console.log('order devivered ' + orderId);
  });

});

