//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
const numArr = [2, 8, 6, 3, 4];
function arrMultiple(arr) {
  const product = arr.reduce((acc, cur) => (acc *= cur), 1);
  alert(product);
}

arrMultiple(numArr);

// let box = 5;
// console.log(box) // 5

// let car = 8;
// console.log(car) //8

// box = car;

// console.log(box) // Changed: 8
// car = box;
