//--- Easy
//create a variable and assign it a number
let num = 15;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input
let inputValue;
document.querySelector('#danceDanceRevolution'),
  addEventListener('change', (e) => {
    inputValue = Number(e.target.value);
    console.log(inputValue);
    //add 25 to that number
    inputValue += 25;

    //alert that number
    alert(inputValue);
  });

//--- Hard
//create a variable that holds the h1

const h1Text = document.querySelector('h1').innerText;

//add an event listener to that element that console logs the sum of the two previous variables

document.querySelector('h1').addEventListener('click', (e) => {
  console.log(inputValue + num);
});

console.dir(console);
console.time(5);
