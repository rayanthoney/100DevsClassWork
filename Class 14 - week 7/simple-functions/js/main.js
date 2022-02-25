//create a function that adds two numbers and alerts the sum
// const add = (a, b) => a + b;

const add = (values) => values.reduce((acc, cur) => (acc += cur), 0);
console.log(add([1, 2, 3, 4]));

//create a function that multiplys three numbers and console logs the product
const multiply = (a, b, c) => console.log(a * b * c);

//create a function that divides two numbers and returns the ???
const divide = (a, b) => a / b;
