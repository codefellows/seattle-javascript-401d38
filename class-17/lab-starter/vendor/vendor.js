/*
Responsibilities:
- Create a new Socket
- Socket should listen for 'data' and 'close' events
- When incoming data event is a 'delivered' then should log a thank you
- Every 5 seconds should dispatch a 'pickup' event with proper payload
See demos for examples and  Lab spec for details.
*/

'use strict';

const faker = require('faker');
const net = require('net');

const socket = new net.Socket();

const options = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
};

socket.connect(options, () => { });
socket.on('data', incomingData);
socket.on('close', closeConnection);

function incomingData(buffer) {
  let raw = buffer.toString().trim();
  let message = JSON.parse(raw);
  let { event, payload } = message;
  if (event === "delivered") {
    console.log(`Thank you for delivering ${payload.orderID}`);
  }
}

function closeConnection() {
  console.log('Connection Closed.');
}

setInterval(() => {
  let delivery = {
    store: '1-206-flowers',
    orderID: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }
  let message = { event: 'pickup', payload: delivery };
  socket.write(JSON.stringify(message));
}, 5000)