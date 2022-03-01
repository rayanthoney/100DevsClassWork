'use strict';

// github task section - code each solution with a while loop and a for loop
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// *****************************************************************
// task 3 - Multiplication table

// while version

let userNum = Number(prompt('pick a number'));

const multiplicationTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let cnt = 0;

while (cnt < multiplicationTable.length) {
  console.log(
    `${userNum} * ${multiplicationTable[cnt]} = ${
      userNum * multiplicationTable[cnt]
    }`
  );
  cnt++;
}

console.clear();

//  for loop version

for (let i = 0; i < multiplicationTable.length; i++) {
  console.log(
    `${userNum} * ${multiplicationTable[i]} = ${
      userNum * multiplicationTable[i]
    }`
  );
}
