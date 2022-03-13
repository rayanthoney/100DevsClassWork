// *Variables*
// Declare a variable, assign it a value, and alert the value
const num = 5;
console.log(num);

// Create a variable, divide it by 10, and console log the value
let guy = 101;
guy /= 10;
console.log(guy);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree(a, b, c) {
  alert(a * b * c);
}
multiplyThree(2, 3, 5);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function four(a, b, c, d) {
  console.log(a + b - c - d);
}
four(10, 5, 7, 3);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function three(a, b, c) {
  const result = (100 + a - b) / c;
  if (result > 25) {
    console.log('WE HAVE A WINNNA');
  }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayChecker(day) {
  const dayLower = day.toLowerCase();
  switch (dayLower) {
    case 'mon':
    case 'tue':
    case 'wed':
    case 'thur':
    case 'fri':
      console.log('week day');
      break;
    case 'sat':
    case 'sun':
      console.log('weekend');
      break;
    default:
      console.log('enter a day');
      break;
  }
}
dayChecker('Mon');
dayChecker('sat');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function repeater(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

repeater(20);
