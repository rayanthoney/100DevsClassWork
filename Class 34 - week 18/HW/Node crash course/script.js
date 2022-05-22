// const person = require('./person');
// console.log(person);
// console.log('hello from node JS');

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener:', data));
// logger.log('Hello world');
// logger.log('Hi');
// logger.log('wadawd');

// Express makes backend ALOT easier but it good to know how to do it raw

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
  // instructor comments : this isn't efficient, for every page we need to do if this and we need to be able to handle CSS or IMGS or any thing
  // // url returns "/" on home page
  // if (request.url === '/') {
  //   // read index.html
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;

  //       // this writes to the headers to expect an html file
  //       response.writeHead(200, { 'Content-type': 'text/html' });
  //       // here we are sending the index.html content we read from the file
  //       response.end(content);
  //     }
  //   );
  // }

  // // about page
  // if (request.url === '/about') {
  //   // read index.html
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'about.html'),
  //     (err, content) => {
  //       if (err) throw err;

  //       // this writes to the headers to expect an html file
  //       response.writeHead(200, { 'Content-type': 'text/html' });
  //       // here we are sending the about.html content we read from the file
  //       response.end(content);
  //     }
  //   );
  // }

  // // if we had a REST api we would serve JSON
  // if (request.url === '/api/users') {
  //   //normally we would grab from a database but hard code for example
  //   const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'John Doe', age: 30 },
  //   ];

  //   // this writes to the headers to expect an html file
  //   response.writeHead(200, { 'Content-type': 'application/json' });
  //   // here we are sending the about.html content we read from the file
  //   response.end(JSON.stringify(users));
  // }

  // Build File path
  let filePath = path.join(
    __dirname,
    'public',
    request.url === '/' ? 'index.html' : request.url
  );

  // Extension of file
  let extName = path.extname(filePath);
  console.log(extName);
  console.log(request.url);
  // extNameObj
  //check ext and set content type
  const contentTypeKey = {
    '.ico': 'text/html',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
  };

  // set content type
  let contentType = contentTypeKey[extName] ?? 'text/html';

  // instructor code, its too boilerplate
  // switch (extName) {
  //   case '.js':
  //     contentType = 'text/javascript';
  //     break;
  //   case '.css':
  //     contentType = 'text/css';
  //     break;
  //   case '.json':
  //     contentType = 'application/json';
  //     break;
  //   case '.png':
  //     contentType = 'image/png';
  //     break;
  //   case '.jpg':
  //     contentType = 'image/jpg';
  //     break;
  // }

  // if (extName === '.ico') return;
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // page not found
      if (err.code == 'ENOENT') {
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end(content, 'utf8');
          }
        );
      } else {
        // Some server error (most likely a 500)
        response.writeHead(500);
        response.end(`Server Error: ${err.code}`);
      }
      // else is needed because without it, any url extension would create a basic html file
    } else {
      // this writes to the headers to expect a file matching the content
      response.writeHead(200, { 'Content-type': contentType });
      // here we are sending the about.html content we read from the file
      response.end(content, 'utf8');
    }
  });

  // console.log(request.url);
});

// defaults to port 8000
const PORT = process.env.PORT || 8000;

// starts server on port supplied, callback happens when server connects
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// nodemon is being use to watch for changes and auto update the server so we don't need to end task and restart it
// to start server "npm run dev"
