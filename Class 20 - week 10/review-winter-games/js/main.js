//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenArr(arr) {
  let evenArr = [];
  arr.forEach((cur) => (cur % 2 === 0 ? evenArr.push(cur) : ''));
  return evenArr;
}

console.log(evenArr(arrNum));
