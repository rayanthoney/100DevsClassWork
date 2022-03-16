//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ['shrek 1', 'shrek 2', 'shrek 2'];
movies.forEach(
  (cur) => (document.querySelector('h2').textContent += `${cur} `)
);

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numArr = [1, 2, 3, 4, 5, 6];
numArr.forEach((num, i, arr) => (arr[i] = num + 3));
console.log(numArr);
//Find the average of all the numbers from question three

let total = 0;
numArr.forEach((num) => (total += num));

console.log(total / numArr.length);
