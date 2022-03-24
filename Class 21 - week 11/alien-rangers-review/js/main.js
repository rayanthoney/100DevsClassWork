//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const arr = ['x', 'y', 'z'];
arr.forEach((cur) => console.log(cur));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumArr = numArr.filter((cur) => cur % 2 === 0);
console.log(evenNumArr);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function weirdSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[1] + sorted[arr.length - 2];
}

console.log(weirdSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
