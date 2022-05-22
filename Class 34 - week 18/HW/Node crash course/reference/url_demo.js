const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized IRL
console.log(myUrl.href);
//http://mywebsite.com/hello.html?id=100&status=active

//Host (root domain) - includes port
console.log(myUrl.host);
//mywebsite.com

//hostname - does not get port
console.log(myUrl.hostname);
// mywebsite.com

//pathname
console.log(myUrl.pathname);
// /hello.html

// serialized query
console.log(myUrl.search);
// ?id=100&status=active

// Parameter's object
console.log(myUrl.searchParams);
// { 'id' => '100', 'status' => 'active' }

//Add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// { 'id' => '100', 'status' => 'active', 'abc' => '123' }

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
/*
id: 100
status: active
abc: 123
*/
