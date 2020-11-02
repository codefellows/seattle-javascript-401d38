'use strict';

const EE = require('events');

const eventMgr = new EE();

// allow "listening" for events
// allow "broadcasting" of events


eventMgr.on('foo', fooHandler);

eventMgr.on('foo', otherFooHandler);

eventMgr.emit('foo', 'some additional info', fooProcessedHandler);


function fooHandler(payload, callback) {

  console.log('original foo happened', payload);

  setTimeout(() => {
    callback();
  }, 2000)
  

}

function fooProcessedHandler() {
  console.log('Foo officially confirmed');
}

function otherFooHandler(payload) {
  console.log('OtherFooHandler', payload)
}

/*
Event examples
listening for incoming http requests
keyPress, click, submit, etc.
*/




// Rough outline (check lab specs for exact event names, etc.)
// Remember: wire up listeners before events emit

// Vendor would emit aka "shout"...
eventMgr.emit('pickup', {info:'about the item to pick up'});

// Driver would listen
eventMgr.on('pickup', driverPickupHandler);

// Driver emits
eventMgr.emit('in-transit');

// A little later Driver emits
eventMgr.emit('delivered')
