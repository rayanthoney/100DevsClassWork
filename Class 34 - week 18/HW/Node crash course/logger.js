const EventEmitter = require('events');
const uuid = require('uuid'); // creates random ID based on which version is picked

// console.log(uuid.v4());
// 97056c8f-2ff0-442b-9547-050033a398bf

class Logger extends EventEmitter {
  log(msg) {
    // call event/ raise event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
