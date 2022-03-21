'use strict';

// https://javascript.info/array-methods

//--------------------- Translate border-left-width to borderLeftWidth ---------------------
function camelize(str) {
  return str
    .toLowerCase()
    .split('-')
    .map((cur, i) => (i === 0 ? cur : cur[0].toUpperCase() + cur.slice(1)))
    .join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));

console.clear();

// --------------------- filter range ---------------------
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

function filterRange(arr, a, b) {
  return arr.filter((cur) => cur >= a && cur <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(arr);
console.log(filtered);

console.clear();

// --------------------- Filter range "in place" ---------------------

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] >= a && arr[i] <= b)) {
      arr.splice(arr.indexOf(arr[i]), 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

console.clear();

// Sort in decreasing order

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

console.log(arr2);

console.clear();

// --------------------- Copy and sort array ---------------------
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

function copySorted(arr) {
  return arr.slice().sort();
}

let arr3 = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arr3);

console.log(arr3);
console.log(sorted);
console.clear();

// --------------------- Create an extendable calculator ---------------------
// Create a constructor function Calculator that creates “extendable” calculator objects.

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    const [a, op, b] = str.split(' ');
    return this.methods[op](Number(a), Number(b));
  };

  this.addMethod = function (methodOp, func) {
    this.methods[methodOp] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('3 - 7'));

let powerCalc = new Calculator();

powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result);
console.clear();

// --------------------- Map to names ---------------------

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let names = users.map((cur) => cur.name);

console.log(names); // John, Pete, Mary
console.clear();

// --------------------- Map to objects ---------------------

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john2 = { name: 'John', surname: 'Smith', id: 1 };
let pete2 = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary2 = { name: 'Mary', surname: 'Key', id: 3 };

let users2 = [john2, pete2, mary2];

let usersMapped = users2.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

console.clear();

// --------------------- Sort users by age ---------------------

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let john3 = { name: 'John', age: 25 };
let pete3 = { name: 'Pete', age: 30 };
let mary3 = { name: 'Mary', age: 28 };

let arr4 = [pete3, john3, mary3];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr4);

// now: [john, mary, pete]
console.log(arr4[0].name); // John
console.log(arr4[1].name); // Mary
console.log(arr4[2].name); // Pete
console.clear();
// --------------------- Shuffle an array ---------------------

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//  Multiple runs of shuffle may lead to different orders of elements. For instance

// this don't work. random sucks
let arr5 = [5, 8, 7];
// console.log(arr5);
// function shuffle(arr) {
//   let randomArr = Array(arr.length)
//     .fill('')
//     .map((cur, i, arr) => {
//       let pick = Math.floor(Math.random() * arr.length);
//       if (!arr.includes(pick)) {
//         return pick;
//       } else {
//         while (arr.includes(pick)) {
//           pick = Math.floor(Math.random() * arr.length);
//           if (!arr.includes(pick)) {
//             return pick;
//           }
//         }
//       }
//     });
//   console.log('randmom', randomArr);
//   let newArr = [];
//   for (const item of randomArr) {
//     newArr.push(arr[item]);
//   }

//   arr.splice(0, arr.length, ...newArr);
// }

// answer
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(arr5);
console.log(arr5);

// arr5 = [3, 2, 1]

shuffle(arr5);
// arr5 = [2, 1, 3]
console.log(arr5);

shuffle(arr5);
// arr5 = [3, 1, 2]
console.log(arr5);

console.clear();
// --------------------- Get average age ---------------------

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age

let john4 = { name: 'John', age: 25 };
let pete4 = { name: 'Pete', age: 30 };
let mary4 = { name: 'Mary', age: 29 };

let arr6 = [john4, pete4, mary4];

function getAverageAge(arr) {
  return arr.reduce((acc, cur) => (acc += cur.age), 0) / arr.length;
}

console.log(getAverageAge(arr6)); // (25 + 30 + 29) / 3 = 28

// --------------------- Get average age ---------------------

// Filter unique array members

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(strings)); // Hare, Krishna, :-O
console.clear();
// --------------------- Create keyed object from array ---------------------

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let users3 = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

let usersById = groupById(users3);
console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
