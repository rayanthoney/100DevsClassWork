// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const num = true;
// alert(num);

// Declare a variable, reassign it to your favorite color, and console log the value
let idk = 5;
idk = 'blue';
console.log(idk);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNum(n1, n2, n3, n4) {
  return (n1 + n2 + n3) / n4;
}
console.log(fourNum(10, 7, 5, 3));
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function powerNum(a, b) {
  return a ** b;
}

console.log(powerNum(3, 5));

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function specialAlert(str, bool) {
  if (bool) {
    alert(str);
  } else {
    console.log(str);
  }
}

specialAlert('hello', false);
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzbuzz(numLimit) {
  for (let i = 1; i <= numLimit; i++) {
    const check3 = i % 3 === 0;
    const check5 = i % 5 === 0;
    console.log(
      `${check3 && check5 ? 'fizzbuzz' : check5 ? 'buzz' : check3 ? 'fizz' : i}`
    );
  }
}

fizzbuzz(16);

// console.error(
//   new Error(
//     'Uncaught TypeError: someBoolean.slice is not a function at <anonymous>:1:45'
//   )
// );
// console.error(
//   new Error(
//     'Uncaught TypeError: someBoolean.slice is not a function at <anonymous>:1:46'
//   )
// );
// console.error(
//   new Error(
//     'Uncaught TypeError: someBoolean.slice is not a function at <anonymous>:1:47... 3rd time? maybe read 👏 the 👏 Error 👏 '
//   )
// );
