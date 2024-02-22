var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;
var customer = function(name) {

    console.log('Customer Name: ' + name);
};
myEmitter.on('customer', customer);
myEmitter.on('message', function(msg) {

    console.log('message: ' + msg);
});

myEmitter.emit('customer', 'yash');
myEmitter.emit('customer', 'Dhanu');
myEmitter.emit('message', 'this is the first message');
myEmitter.emit('message', 'this is the second message');
myEmitter.emit('message', 'welcome to your Compan');