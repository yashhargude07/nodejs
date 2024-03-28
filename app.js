const EventEmitter = require('events');

var eventEmitter1 = new EventEmitter();

var eventEmitter2 = new EventEmitter();

console.log("Default max listener for eventEmitter1 is:",eventEmitter1.getMaxListeners());

console.log("Default max listener for eventEmitter2 is:",eventEmitter2.getMaxListeners());

EventEmitter.defaultMaxListeners = 2;

console.log("Default max listener for eventEmitter1 is:",eventEmitter1.getMaxListeners());

console.log("Default max listener for eventEmitter2 is:",eventEmitter2.getMaxListeners());

eventEmitter1.setMaxListeners(5);

console.log("Default max listener for eventEmitter1 is:",eventEmitter1.getMaxListeners());

console.log("Default max listener for eventEmitter2 is:",eventEmitter2.getMaxListeners());