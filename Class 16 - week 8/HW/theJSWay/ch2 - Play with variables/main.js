'use strict';

// Improved hello
// const firstName = prompt('what is your First name?');
// const lastName = prompt('what is your Last name?');

// console.log(`so your name is ${firstName} ${lastName}`);

// Final values
let a = 2;
a -= 1; // a now 1
a++; // a = 2
let b = 8;
b += 2; // b = 10
const c = a + b * b; // 102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = (a * b) / a; // 10
const g = (b / a) * a; // 10
console.log(a, b, c, d, e, f, g); // 2,10,102,30,40,10,10

// VAT calculation

function vatCalc(price) {
  return price * 1.206;
}

console.log(vatCalc(21.56));

// From Celsius to Fahrenheit degrees

function tempConverterFromC(Cdeg) {
  return (Cdeg * 9) / 5 + 32;
}
console.log(tempConverterFromC(32));

// Variable swapping
// Add the necessary code to swap the values of variables number1 and number2.
let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
let holder = number1;
number1 = number2;
number2 = holder;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
