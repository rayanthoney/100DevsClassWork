const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
// figlet creates ascii art for words
const figlet = require('figlet');

const contentType = {
  html: 'text/html',
  json: 'application/json',
  js: 'text/javascript',
  css: 'text/css',
};

const allHTMLFiles = {
  '/': 'index.html',
  '/otherpage': 'otherpage.html',
  '/otherotherpage': 'otherotherpage.html',
};

// utility functions
function hostReadFile(file, type = html, res) {
  console.log('inside hostReadFile');
  fs.readFile(file, function (err, data) {
    res.writeHead(200, { 'Content-Type': `${contentType[type]}` });
    res.write(data);
    res.end();
  });
}

function handleAPICall(params, res) {
  const data = {
    leon: {
      name: 'leon',
      status: 'Boss Man',
      currentOccupation: 'Baller',
    },
    unknown: {
      name: 'unknown',
      status: 'unknown',
      currentOccupation: 'unknown',
    },
  };

  if ('student' in params) {
    let student = params['student'] === 'leon' ? 'leon' : 'unknown';
    console.log(student);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data[student]));
  } //student if
}

// returns a new instance of http.server object
const server = http.createServer((req, res) => {
  // url.parse is legacy
  const page = url.parse(req.url).pathname;
  // new URL() is current, using
  // const page = new URL(req.url).pathname;
  console.log(`page is equal too :   ${page}`);
  // front end side a fetch is being used with fetch(`/api?student=${userName}`) coming from the input
  const params = querystring.parse(url.parse(req.url).query);

  if (page in allHTMLFiles) {
    hostReadFile(allHTMLFiles[page], 'html', res);
  } else if (page == '/api') {
    handleAPICall(params, res);
  } //else if
  else if (page == '/css/style.css') {
    hostReadFile('css/style.css', 'css', res);
  } else if (page == '/js/main.js') {
    hostReadFile('js/main.js', 'js', res);
  } else {
    // error handling if people look up a page that doesn't exist
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

// Starts the HTTP server listening for connections. This method is identical to server.listen() from net.Server.
server.listen(8000);
// console.log(server);

module.exports = server;
