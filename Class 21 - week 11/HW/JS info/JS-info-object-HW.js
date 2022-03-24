'use strict';

// Javascript info - object chapter HW
//https://javascript.info/object

// ---------------- Hello, object ----------------

// Write the code, one line for each action:

/*
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// ---------------- check for emptiness ----------------
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) return true;
  return false;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false

// ---------------- Sum object properties ----------------
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

//If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let total = 0;
for (const peoplePay in salaries) {
  total += salaries[peoplePay];
}
console.log(total);

// ---------------- Multiply numeric property values by 2 ----------------

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2

function multiplyNumeric(menu) {
  for (let propName in menu) {
    if (typeof menu[propName] === 'number') menu[propName] *= 2;
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
console.log(menu);

multiplyNumeric(menu);

console.log(menu);
// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
