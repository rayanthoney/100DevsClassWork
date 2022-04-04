'use strict';

// https://javascript.info/object-methods

// problem 1
//Using "this" in object literal

/*
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?


 */

// factory function
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

// alert(user.ref.name); // What's the result?
// result = "John" // i was wrong
// result = "undefined"

function makeUser2() {
  return this;
}

//////////////////////////////////////////////////////////////////////////////

// problem 2
// Create a calculator
/*
Create an object calculator with three methods:
read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.

*/

let calculator = {
  read() {
    this.value1 = Number(prompt('value 1 is?'));
    this.value2 = Number(prompt('value 2 is?'));
  },
  sum() {
    return this.value1 + this.value2;
  },
  mul() {
    return this.value1 * this.value2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//////////////////////////////////////////////////////////////////////////////

// problem 3
// Chaining

/*
There’s a ladder object that allows to go up and down: 
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};

// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
