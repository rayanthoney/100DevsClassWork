'use strict';

// github task section - code each solution with a while loop and a for loop
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// *****************************************************************
// task 3 - Input validation

// while version

let userNumGuess = Number(prompt('guess a number'));

// while (userNumGuess > 100 || userNumGuess < 50) {
//   userNumGuess = Number(prompt('guess a number'));
// }

// for loop version
for (let i = 0; i < 1; i++) {
  if (userNumGuess < 100 && userNumGuess > 50) {
    break;
  }
  i = 0;
  userNumGuess = Number(prompt('guess a number'));
}
