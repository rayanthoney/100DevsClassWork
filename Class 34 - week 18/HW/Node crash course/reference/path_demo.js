const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// Concatenate paths
// good for delimiters, in windows files use / and \ interchangeable for different stuff but linux/mac uses only / so this method picks the right one
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
