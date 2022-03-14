'use strict';

// chapter 3 - add conditions

// Following day
//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

function previousDay() {
  const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
  const userPick = prompt('Pick a day?').toLowerCase();
  const curIndex = days.indexOf(userPick);

  // keep asking if wrong input
  if (curIndex === -1) return previousDay();
  if (curIndex === 0) return days[days.length - 1];
  return days[curIndex - 1];
}

// alert(previousDay());

// Number comparison

function numCompare(n1, n2) {
  let message = '';
  if (n1 > n2) message = `${n1} is higher than ${n2}`;
  if (n1 < n2) message = `${n1} is less than ${n2}`;
  if (n1 === n2) message = `${n1} is equal too ${n2}`;
  return message;
}

console.log(numCompare(5, 3));
console.log(numCompare(7, 15));
console.log(numCompare(6, 6));

// Final values - predict
// n1=n2=n3=4 final: n1=0 n2=4 n3=12
// n1=4,n2=3,n3=2 final: n1=4 n2=3 n3=2
// n1=2,n2=4,n3=0 final: n1=3 n2=4 n3=0

// let n1 = Number(prompt('Enter n1:'));
// let n2 = Number(prompt('Enter n2:'));
// let n3 = Number(prompt('Enter n3:'));

let n1 = 4;
let n2 = 4;
let n3 = 4;

if (n1 > n2) {
  n1 = n3 * 2;
} else {
  n1++;
  if (n2 > n3) {
    n1 += n3 * 3;
  } else {
    n1 = 0;
    n3 = n3 * 2 + n2;
  }
}
console.log(n1, n2, n3);

// Number of days in a month
//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

function numDaysInMonth(monthNum) {
  const monthDataArr = [
    { month: 'January', totalNumOfDays: 31 },
    { month: 'February', totalNumOfDays: 28 },
    { month: 'March', totalNumOfDays: 31 },
    { month: 'April', totalNumOfDays: 30 },
    { month: 'May', totalNumOfDays: 31 },
    { month: 'June', totalNumOfDays: 30 },
    { month: 'July', totalNumOfDays: 31 },
    { month: 'August', totalNumOfDays: 31 },
    { month: 'September', totalNumOfDays: 30 },
    { month: 'October', totalNumOfDays: 31 },
    { month: 'November', totalNumOfDays: 30 },
    { month: 'December', totalNumOfDays: 31 },
  ];

  const { month, totalNumOfDays } = monthDataArr[monthNum - 1];

  return `There are ${totalNumOfDays} days in the month of ${month}`;
}

console.log(numDaysInMonth(11));

//Following second

function nextSecond(hr, min, sec) {
  // guard clause
  if (
    typeof hr !== 'number' ||
    typeof min !== 'number' ||
    typeof sec !== 'number'
  )
    return;

  if (sec === 59 && min !== 59) {
    return `${hr}h${min + 1}m${0}s`;
  } else if (sec === 59 && min === 59) {
    return `${hr + 1}h${0}m${0}s`;
  }

  return `${hr}h${min}m${sec + 1}s`;
}

console.log(nextSecond(5, 10, 50));
console.log(nextSecond(5, 10, 59));
console.log(nextSecond(5, 59, 59));
