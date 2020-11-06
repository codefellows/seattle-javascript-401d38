'use strict';

const io = require('socket.io-client');
const PORT = process.env.PORT || 3000;

const server = io(PORT);

const eventQueue = {}

server.on('connection', socket => {

  // what happens when we've successfully receive an event
  socket.on('received', (payload) => {
    // when we receive an event we can make sure that it is deleted correctly from our queue
    let { orderID, event, clientID } = payload;
    delete messages[event][clientID][orderID];
  })


  // we are creating an event in the queue and also a reference to the client that wants to place things in the queue
  socket.on('subscribe', payload => {

    let { event, clientID } = payload;
    // Set Up the queue for their message
    // This could/should be a function call!
    if (!messages[event]) { messages[event] = {}; }
    if (!messages[event][clientID]) { messages[event][clientID] = {}; }

  });


  /**
   * These event are specific to the type of application we are building
   */
  socket.on('delivered', (message) => {

    let messageID = uuid();

    eventQueue['delivered'][message.payload.store][messageID] = message.payload;
    io.in(message.payload.store).emit('delivered', { messageID, payload: message.payload });
  });

  socket.on('pickup', (message) => {
    let messageID = uuid();
    // To the queue
    eventQueue['pickup']['driver'][messageID] = message.payload;
    // To the driver
    io.in('driver').emit('pickup', { messageID, payload: message.payload });
  });

  socket.on('in-transit', (message) => {
    let messageID = uuid();
    // To the queue
    eventQueue['in-transit'][message.payload.store][messageID] = message.payload;
    // To the store
    io.in(message.payload.store).emit('in-transit', { messageID, payload: message.payload });
  });
});
