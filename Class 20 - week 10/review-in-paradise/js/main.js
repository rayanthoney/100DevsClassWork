// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let guy = 10;
guy = 'pizza';
alert(guy);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const strTest = 'idk';
alert(strTest[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function three(a, b, c) {
  return (a / b) * c;
}
three(2, 5, 8);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n) {
  return Math.cbrt(n);
}
console.log(cubeRoot(64));

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerMonth(month) {
  const summerMonth = ['june', 'july', 'August'];
  if (summerMonth.includes(month)) return 'yay';
  return 'Booo';
}
console.log(summerMonth('june'));
console.log(summerMonth('october'));

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function repeatNum(num) {
  for (let i = 0; i <= num; i++) {
    i % 5 === 0 ? '' : console.log(i);
  }
}
repeatNum(10);
