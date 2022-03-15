'use strict';

// chapter 5 - write functions

// improved hello **********************
//Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello() {
  // TODO: ask user for first and last name
  const firstName = prompt('whats your first name?');
  const lastName = prompt('whats your last name?');

  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: call sayHello() and show its result
// console.log(sayHello());

// Number squaring **********************
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
  return x * x;
}

// Square the given number x
const square2 = (x) => x * x; // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// When it's done, update the program so that it shows the square of every number between 0 and 10.

function square1Repeat() {
  for (let i = 0; i <= 10; i++) console.log(i * i);
}
square1Repeat();

// Minimum of two numbers **********************
//Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

function min(n1, n2) {
  return n1 < n2 ? n1 : n2;
}

// TODO: write the min() function
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1

// Calculator **********************

// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

function calculate(n1, sign, n2) {
  let answer;
  switch (sign) {
    case '+':
      answer = n1 + n2;
      break;
    case '-':
      answer = n1 - n2;
      break;
    case '*':
      answer = n1 * n2;
      break;
    case '/':
      answer = n1 / n2;
      break;
  }

  return answer;
}

console.log(calculate(4, '+', 6)); // Must show 10
console.log(calculate(4, '-', 6)); // Must show -2
console.log(calculate(2, '*', 0)); // Must show 0
console.log(calculate(12, '/', 0)); // Must show Infinity // its undefined

// Circumference and area of a circle **********************
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

function circumferenceCalc(r) {
  return 2 * r * Math.PI;
}

function circleArea(r) {
  return r ** 2 * Math.PI;
}

function circlecircumferenceAndAreaCalc(r) {
  console.log(circumferenceCalc(r));
  console.log(circleArea(r));
}

circlecircumferenceAndAreaCalc(15);
