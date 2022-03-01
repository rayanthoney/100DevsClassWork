'use strict';

// github task section - code each solution with a while loop and a for loop
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// *****************************************************************
// task 2 - Parity

// while version

let cnt = 0;
const userCntInput = Number(prompt('enter a max value: ', 10));

while (cnt <= userCntInput) {
  const result = cnt % 2 === 0 ? 'even' : 'odd';
  console.log(`${cnt} is ${result}`);

  cnt++;
}

console.clear();

// for loop version

for (let i = 0; i <= userCntInput; i++) {
  const result = i % 2 === 0 ? 'even' : 'odd';
  console.log(`${i} is ${result}`);
}
