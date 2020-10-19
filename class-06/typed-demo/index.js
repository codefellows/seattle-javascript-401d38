'use strict';

// get the library from node_modules
const jsonServer = require('json-server');
// function that returns an object
const server = jsonServer.create();
// another function that returns a router object => configured with our database file
const router = jsonServer.router('db.json');
// creates JSON serves default middlewares
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
// run json-server from a node js file
server.listen(PORT, () => {
  console.log('JSON Server is running');
});
