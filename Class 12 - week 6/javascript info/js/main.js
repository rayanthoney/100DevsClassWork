'use strict';
// variables article task - https://javascript.info/variables

// Task 1 - working with variables

let name = 'John';
const admin = name;

console.log(admin);

// Task 2 - Giving the right name

const ourPlanetName = 'earth';

const currentVisitorName = 'guy';

// Task 3 - uppercase const?

const BIRTHDAY = '18.04.1982';
// const age = someCode(BIRTHDAY); // somecode doesn't exist

let userName = 'John';

function showMessage() {
  let userName = 'Bob'; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// function-basics article task - https://javascript.info/function-basics

// Task 1 - Is "else" required?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

// vs - Will the function work differently if else is removed?
// question - would work the same
function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// Task 2 - Rewrite the function using '?' or '||'

// start function to rewrite

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

const checkAge3 = (age) => (age > 18 ? true : confirm(`Did parent allow you?`));

function checkAge4(age) {
  return age > 18 || confirm('Did parent allow you?');
}

// Task 3 - Function min(a, b)

function min(a, b) {
  return a < b ? a : b;
}

// Task 4 - Function pow(x,n)

function pow(x, n) {
  return x ** n;
}
