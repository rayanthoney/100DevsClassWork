'use strict';

// github task section - code each solution with a while loop and a for loop
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// *****************************************************************
// task 5 - Neither yes nor no

// while version
let userInput = prompt('yes or no');

// while (userInput !== 'no') {
//   console.log('type');
//   userInput = prompt('yes or no');
// }

// for loop version

for (let i = 0; i < 1; i++) {
  userInput = prompt('yes or no');

  if (userInput !== 'no') i = 0;
}
