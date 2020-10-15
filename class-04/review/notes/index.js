'use strict';
console.log('#-----------------------------#');
console.log('#---------- Start ------------#');
console.log('                               ');

require('dotenv').config();
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

// Setting up a mongo DB connection

// 1a Is Mongo set up locally?
// `mongod --dbpath <path-to-db-folder>`
//        if you want a local db: `mkdir db`

// 1b Is Mongo set up Remotely?
//  config on Mongo Atlas

// 2 Configuring Mongoose
// `npm install mongoose`
// Add mongoose connection method to your index
//    import from node_modules
const mongoose = require('mongoose');
//    use the connect method
// connection string always start  with mongodb://
// than comes the host ( if local you can use localhost or 127.0.0.1)
// than comes the port by default the mongod service uses 27017
// lastly is the db name ex: class-04

// NOTE if connecting remotely: mongodb+srv://<Username>:<Password>@cluster0.vpuao.mongodb.net/<DB_NAME>?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log('mongoose connected');


  let actualArgv = process.argv;
  let validNote = new Input(actualArgv);
  if (validNote.valid() === true) {
    let object = new Note(validNote);
    object.execute();
    console.log('                               ');
    console.log('#---------- End --------------#');
    console.log('#-----------------------------#');
  } else {
    console.log('                               ');
    console.log('#---------- End --------------#');
    console.log('#-----------------------------#');
  }
});




// // old code

// const Input = require('./lib/input.js');
// const Notes = require('./lib/notes.js');

// const minimist = require('minimist');


// // This slices off the first two indexes and is the method for minimist
// let args = minimist(process.argv.slice(2));

// console.log(args);
// //args is an object that holds whatever command and arguments are passed in
// const input = new Input(args);

// //if input action is valid, then create new note
// //note has an id and a payload which will be added as text

// if(input.valid()) {
//   new Notes(input);
// } else {
//   throw new Error('invalid action');
// }
