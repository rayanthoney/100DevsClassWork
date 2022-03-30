//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numArr = [0, 45, 6, 8, 1, 6, 8451, 2];

const total = numArr.reduce((total, num) => (total += num), 0);
console.log(total);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareAll(numArr) {
  return numArr.map((num) => num ** 2);
}
console.log(squareAll(numArr));

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr('ryan'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome(str) {
  const rStr = reverseStr(str);

  if (str === rStr) return true;

  return false;
}

console.log(isPalindrome('leonnoel'));
