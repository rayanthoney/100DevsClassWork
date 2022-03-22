'use strict';

// Eloquent JS | Ch 4 Data Structures: Objects and Arrays
// https://eloquentjavascript.net/04_data.html

// ---------------- The sum of a range ----------------

function range(start, end, step = 1) {
  let arr = [];
  console.log(step);
  for (let i = start; start < end ? i <= end : i >= end; i += step) {
    arr.push(i);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((acc, num) => (acc += num), 0);
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

console.log('----------------START OF REVERSING AN ARRAY----------------');

// Reversing an array

// can't use reverse
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  const newArr = [];
  let cnt = 0;
  const total = arr.length;
  while (cnt < total) {
    newArr.push(arr.pop());
    cnt++;
  }
  arr.push(...newArr);
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log('----------------A LIST----------------');
// A list

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument

function arrayToList(arr) {
  let list;
  for (let i = arr.length - 1; i >= 0; i--) {
    i === arr.length - 1
      ? (list = { value: arr[i], rest: null })
      : (list = { value: arr[i], rest: list });
  }
  return list;
}

// Also write a listToArray function that produces an array from a list.
function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

// Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(el, list) {
  if (list === null) return { value: el, rest: null };
  return { value: el, rest: list };
}

// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
function nth(list, num) {
  if (num === 0) return list.value;
  if (list.rest !== null) return nth(list.rest, num - 1);
  return -1;
}

// part B: If you haven’t already, also write a recursive version of nth.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(arrayToList([10, 20, 30, 40, 50, 60, 70]));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

console.log('----------------Deep comparison----------------');

// Deep comparison

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

function deepEqualBad(objOne, objTwo) {
  return -1;
  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);
  // basic check
  if (objOneKeys.length !== objTwoKeys.length) return false;

  // initial check, properties use the same name
  for (const key of objOneKeys) {
    if (!objTwoKeys.includes(key)) return false;
  }

  let checkArr = [];
  let objToCheck = [];

  for (let i = 0; i < objOneKeys.length; i++) {
    // can't check nested objects in this loop
    if (
      typeof objOne[objOneKeys[i]] === 'object' &&
      typeof objTwo[objOneKeys[i]] === 'object'
    ) {
      objToCheck.push(objOneKeys[i]);
      continue;
    }
    // check regular
    objOne[objOneKeys[i]] === objTwo[objOneKeys[i]]
      ? checkArr.push(true)
      : checkArr.push(false);
  }
  // if there are no nested objects
  if (objToCheck.length === 0 && checkArr.length === objOneKeys.length) {
    if (checkArr.every((item) => item)) return true;
    if (!checkArr.every((item) => item)) return false;
  }

  let nestedObjToCheck = [];
  // put all in one element
  nestedObjToCheck = [...objToCheck];
  let nestedObjRegCheck = [];
  let objOneNestedKey;
  let objTwoNestedKey;
  for (let node = nestedObjToCheck[0]; node; node = nestedObjToCheck[0]) {
    objOneNestedKey = Object.keys(objOne[node]);
    objTwoNestedKey = Object.keys(objTwo[node]);
    // check if nested object keys are the same
    for (const key of objOneNestedKey) {
      if (!objTwoNestedKey.includes(key)) return false;
    }
    // after all keys are confirmed to be same
    for (const key of objOneNestedKey) {
      // only need to check one
      // if obj, push to another array to check deeper next pass
      if (typeof objTwoNestedKey[key] === 'object') nestedObjToCheck.push(key);
      // check if the values are the same
      objTwoNestedKey[key] === objOneNestedKey[key]
        ? nestedObjRegCheck.push(true)
        : nestedObjRegCheck.push(false);
    }

    // if no objects to check deeper - exit for loop
    if (nestedObjToCheck.length === 0) {
      if (nestedObjRegCheck.every((item) => item)) return true;
      if (!nestedObjRegCheck.every((item) => item)) return false;
    }

    // if need to check deeper, reset
    nestedObjRegCheck = [];
    objOneNestedKey = [];
    objTwoNestedKey = [];
    // first has been checked
    const result = nestedObjToCheck.unshift();
    if (result === 0) nestedObjToCheck.push(null);
  }
}

// recursive
function deepEqual(obj1, obj2) {
  // recursive check
  if (obj1 !== obj2) {
    if (
      (typeof obj1 === 'object' && typeof obj2 !== 'object') ||
      (typeof obj1 !== 'object' && typeof obj2 === 'object')
    )
      return false;
  }

  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    if (!key2.includes(key)) return false;
    if (obj1[key] !== obj2[key] && typeof obj1[key] !== 'object') return false;
    if (typeof obj1[key] === 'object' && obj1[key] !== null)
      return deepEqual(obj1[key], obj2[key]);
  }

  return true;
}

let obj = { here: { is: 'an' }, object: 2 };
let obj2 = { name: 'ryan', age: 24, color: 'blue' };
let obj3 = { name: 'ryan', age: 24, color: 'red' };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true

console.log(deepEqual(obj2, obj3));
// false

console.log(deepEqual(obj2, obj2));
// true

let objExtreme = {
  here: 5,
  guy: 'girl',
  rest: {
    level: 8,
    extra: {
      wow: 'doge',
      boom: {
        deep: 5,
        little: 3,
        messup: [0, 12, 5, 6],
        guy: 'extra',
        dino: { color: 'blue' },
      },
    },
  },
};

let objExtreme2 = {
  here: 5,
  guy: 'girl',
  rest: {
    level: 8,
    extra: {
      wow: 'doge',
      boom: {
        deep: 5,
        little: 3,
        messup: [0, 13, 5, 6],
        guy: 'extra',
        dino: { color: 'blue' },
      },
    },
  },
};

console.log(deepEqual(objExtreme, objExtreme));
// true
console.log(deepEqual(objExtreme, objExtreme2));
// false
