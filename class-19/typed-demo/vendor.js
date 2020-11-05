'use strict';

const io = require('socket.io-client');
const faker = require('faker');

const socket = io.connect('http://localhost:3000');

setInterval(() => {
  console.log('sending order for pickup');

  let order = {
    address: `${faker.address.city()} ${faker.address.state()}`,
    phoneNumber: faker.phone.phoneNumber(),
  }
  socket.emit('pickup', order);

}, 500);
