'use strict';

// github task section - code each solution with a while loop and a for loop
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// *****************************************************************
// task 6 - fizzbuzz

// fizzbuzz rules
// 3 = fizz
// 5 = buzz
// 3/5 = fizzbuzz

// while version

let cnt = 1;

while (cnt <= 100) {
  const check3 = cnt % 3 === 0;
  const check5 = cnt % 5 === 0;
  let result =
    check3 && check5 ? 'fizzbuzz' : check5 ? 'buzz' : check3 ? 'fizz' : cnt;

  console.log(result);
  cnt++;
}

console.clear();

// for loop version

for (let i = 1; i <= 100; i++) {
  const check3 = i % 3 === 0;
  const check5 = i % 5 === 0;
  let result =
    check3 && check5 ? 'fizzbuzz' : check5 ? 'buzz' : check3 ? 'fizz' : i;
  console.log(result);
}

console.clear();

// for loops scuffed version

// console.log(Array(100));
// console.log(Array().fill(100));

Array(100)
  .fill(0, 0, 100)
  .map((cur, i) => {
    const check3 = i % 3 === 0;
    const check5 = i % 5 === 0;
    let result =
      check3 && check5 ? 'fizzbuzz' : check5 ? 'buzz' : check3 ? 'fizz' : i;
    return result;
  })
  .forEach((cur) => console.log(cur));

console.clear();

// recursive function version

function fizzBuzz(i) {
  const check3 = i % 3 === 0;
  const check5 = i % 5 === 0;
  let result =
    check3 && check5 ? 'fizzbuzz' : check5 ? 'buzz' : check3 ? 'fizz' : i;

  if (i === 101) return;

  console.log(result);
  i++;
  return fizzBuzz(i);
}

fizzBuzz(1);
