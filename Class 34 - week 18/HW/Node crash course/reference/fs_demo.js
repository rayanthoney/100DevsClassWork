const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   function (err) {
//     if (err) throw err;
//     console.log('File written too...');
//   }
// );

// write to file that already exists
// fs.appendFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   ' I love node.js',
//   function (err) {
//     if (err) throw err;
//     console.log('File written too...');
//   }
// );

// read file
// fs.readFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'utf8',
//   function (err, data) {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err) => {
    if (err) throw err;
    console.log('file renamed');
  }
);
