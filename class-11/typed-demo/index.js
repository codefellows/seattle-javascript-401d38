'use strict';

const server = require('./server.js');

server.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
