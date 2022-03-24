// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let x = 'h';
x = 'x-max'.toUpperCase();
console.log(x);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let y = 'ryan';
alert(y.slice(y.length - 3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function five(a, b, c, d, e) {
  alert(Math.abs(100 - a - b - c - d - e));
}
five(10, 5, 86, 74, 60);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function three(a, b, c) {
  console.log(Math.min(a, b, c));
  console.log(Math.max(a, b, c));
}
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function randomCoinToss() {
  return Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
}
randomCoinToss();
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function multipleToss(times) {
  let total = { heads: 0, tails: 0 };
  for (let i = 0; i < times; i++) {
    randomCoinToss() === 'heads' ? (total.heads += 1) : (total.tails += 1);
  }
  console.log(total);
}

multipleToss(10);
