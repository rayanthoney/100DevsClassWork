'use strict';
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md
// Musketeers

/*
Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.

*/

const musketeers = ['Athos', 'Porthos', 'Aramis'];
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

console.log('NEXT STEP--------------');

musketeers.unshift("D'Artagnan");

musketeers.forEach((cur) => console.log(cur));

console.log('NEXT STEP--------------');
musketeers.pop();

for (let musk of musketeers) {
  console.log(musk);
}

console.clear();

// Sum of values

// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

function sumOfValues(arr) {
  return arr.reduce((acc, cur) => (acc += cur), 0);
}

console.log(sumOfValues(values));

console.clear();

// Array maximum
//Write a program that creates the following array, then calculates and shows the array's maximum value.

console.log(Math.max(...values));

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

function askUser(total = '') {
  let userWord = prompt('write a word').toLowerCase();

  if (userWord === 'stop') return total;

  return askUser((total += ` ${userWord}`));
}

console.log(askUser());
