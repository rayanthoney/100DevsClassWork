'use strict';
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// ------------- Adding character experience -------------
/*
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
*/

// TODO: create the character object here

const aurora = {
  name: 'aurora',
  health: 150,
  strength: 25,
  xp: 0,
  describe: function () {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength and ${this.xp} XP points`;
  },
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//------------- Modeling a dog -------------
// Complete the following program to add the dog object definition.

// TODO: create the dog object here

const dog = {
  name: 'Fang',
  species: 'boarhound',
  size: 75,
  bark: function () {
    return `Grrr! Grrr!`;
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// ------------- Modeling a circle -------------
// Complete the following program to add the circle object definition. Its radius value is input by the user.

// const r = Number(prompt('Enter the circle radius:'));
let r = 7;

// TODO: create the circle object here

const circle = {
  radius: r,
  circumference: function () {
    return 2 * Math.PI * this.radius;
  },
  area: function () {
    return Math.PI * this.radius ** 2;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// Modeling a bank account

// Write a program that creates an account object with the following characteristics:

/*
A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.

*/

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.credit = function (num) {
  this.balance += num;
};

BankAccount.prototype.describe = function () {
  return `owner: ${this.name}, balance ${this.balance}`;
};

const alexAccount = new BankAccount('Alex', 0);

console.log(alexAccount);
alexAccount.credit(50);
alexAccount.credit(170);
alexAccount.credit(-40);

console.log(alexAccount.describe());
