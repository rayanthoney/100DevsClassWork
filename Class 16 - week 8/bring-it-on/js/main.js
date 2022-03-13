// *Variables*
// Create a variable and console log the value
const num = 5;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let num2 = 10;
num2 += 3;
alert(num2);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(a, b, c, d) {
  return a - b - c - d;
}
alert(subtractFour(10, 3, 5, 7));
// Create a function that divides one number by another and returns the remainder
function divideTwo(a, b) {
  return a % b;
}

console.log(divideTwo(10, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function idk(a, b) {
  let result = a + b;

  if (result > 50) {
    console.log('Jumanji');
  }
}

idk(25, 37);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multipleThree(a, b, c) {
  const result = a * b * c;
  if (result % 3 === 0) {
    console.log('zebra');
  }
}
multipleThree(3, 3, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function spamWord(word, num) {
  for (let i = 0; i < num; i++) {
    console.log(word);
  }
}

spamWord('guy ', 5);
