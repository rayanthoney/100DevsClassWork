//https://javascript.info/promise-chaining

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve); // function() { native code }
    // resolve with this.num*2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result); // (*)
  })
  .then(console.log); // shows 2 after 1000ms

// TASKS
//exercise 1: Promise: then versus catch
/*
  
  Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?
  */
promise.then(f1).catch(f2);
//vs

promise.then(f1, f2);

// ANSWER: Yes, on error/rejection f2 will run, on the catch, the catch will capture the error

// real answer:

/*
  The short answer is: no, they are not equal:
  The difference is that if an error happens in f1, then it is handled by .catch here:

  That’s because an error is passed down the chain, and in the second code piece there’s no chain below f1.

In other words, .then passes results/errors to the next .then/catch. So in the first example, there’s a catch below, and in the second one there isn’t, so the error is unhandled.


  */
