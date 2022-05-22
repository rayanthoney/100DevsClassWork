const { read } = require('fs');
const http = require('http');

// Create server object - all it takes to make a server
http
  .createServer((req, res) => {
    //Write response
    res.write('Hello world');
    res.end();
  })
  .listen(8000, () => console.log('Server running....'));
