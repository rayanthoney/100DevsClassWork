const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter {}

//Init object
const me = new MyEmitter();

//Event listener
me.on('event', () => console.log('Event Fired!'));

//Init event
me.emit('event');
me.emit('event');
me.emit('event');
me.emit('event');
