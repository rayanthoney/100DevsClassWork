'use strict';

// eloquent JS | Ch 3 - Functions

// Minimum

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(0, 10));

console.log(min(0, -10));

// Recursion

function isEven(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  if (n < 0) return isEven(n + 2);
  return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → true

// Bean counting

function countChar(str, char) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) str[i] === char ? (cnt += 1) : '';
  return cnt;
}

function countBs(str) {
  return countChar(str.toLowerCase(), 'b');
}

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
