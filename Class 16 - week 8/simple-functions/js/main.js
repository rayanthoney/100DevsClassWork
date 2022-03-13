//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwo(a, b) {
  let result = a - b;
  alert(result);
}
subtractTwo(10, 7);
//create a function that divides three numbers and console logs the quotient
function divideThree(a, b, c) {
  console.log(a / b / c);
}
divideThree(15, 2, 5);
//create a function that multiplys three numbers and returns the product
function multiplyThree(a, b, c) {
  return a * b * c;
}
console.log(multiplyThree(10, 7, 3));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(a, b, c) {
  const resultSum = a + b;
  return resultSum % c;
}

console.log(medium(10, 7, 2));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hard(a, b, c, d) {
  const firstMultiple = a * b;

  if (firstMultiple > 100) {
    console.log(firstMultiple + c + d);
  } else if (firstMultiple < 100) {
    console.log(firstMultiple - c - d);
  } else {
    console.log((a * b * c) % d);
  }
}

hard(50, 50, 10, 2);
hard(48, 51, 11, 3);
