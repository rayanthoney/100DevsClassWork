//https://javascript.info/promise-error-handling

new Promise((r) => r(1))
  .then((value) => {
    console.log(value); // 1
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 2
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 3
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 4
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 5
    throw new Error('oops big bad happened'); // execution stops here
    return value + 1; // everything gets skipped
  })
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .catch((err) => console.error(err)); // jumps here

// 1
// 2
// 3
// 4
// 5
// Error: oops big bad happened at error-handling-with-promises-script.js:22:11

// TASKS
// exercise 1: Error in setTimeout

// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(alert);

// YES, because the throw new Error is what catch is looking for regardless if reject() is used or not because Promises have an implicit try..catch block around them
