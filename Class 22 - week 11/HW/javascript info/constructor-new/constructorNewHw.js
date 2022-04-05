'use strict';

// https://javascript.info/constructor-new

//problem 1
// Two functions – one object

// Is it possible to create functions A and B so that new A() == new B()?

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a == b); // true

////////////////////////////////////////////////////////////
//problem 2
// Create new Calculator

/*
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.

*/

function Calculator() {
  this.read = function () {
    // this.a = prompt('a = ');
    this.a = 5;
    // this.b = prompt('b = ');
    this.b = 2;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());

////////////////////////////////////////////////////////////
//problem 3
// Create new Accumulator

/*
Create a constructor function Accumulator(startingValue).
Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

*/

function Accumulator(value) {
  this.value = value;
  this.read = function () {
    const userNum = Number(prompt('add a number'));
    return (this.value += userNum);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
