//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
const pokemon = [1, 2, 3, 4, 5];

function reversePok(arr) {
  arr.reverse();
  console.log(arr);
}
reversePok(pokemon);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function squareVsCube(arr1, arr2) {
  const squareTotal = arr1.reduce((t, c) => t + c ** 2, 0);
  const cubeTotal = arr2.reduce((t, c) => t + c ** 3, 0);

  return squareTotal > cubeTotal;
}

console.log(squareVsCube([2, 5, 8, 41], [8, 9, 5, 3]));
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfIndex(arr) {
  return arr.filter((n, i) => n % i === 0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function fullSum(arr) {
  return arr.reduce((t, c) => (t += Number(c)), 0);
}

console.log(fullSum(['1', 2, 3, '4', 5]));
