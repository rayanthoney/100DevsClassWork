//Create a pizza object that has four properties and three methods
const pizza = new Object();

pizza.type = 'supreme';
pizza.cookTime = '15min';
pizza.temp = 450;
pizza.numOfSlices = 8;

pizza.instructions = function () {
  return `The pizza is going in the oven for ${this.cookTime} at ${this.temp} deg's`;
};

pizza.handOut = function () {
  for (let i = 0; i <= this.numOfSlices; i++) {
    console.log(`hand out pizza slice ${i}`);
  }
};

pizza.whatType = function () {
  return `we eating ${this.type} pizza today`;
};

console.log(pizza.instructions());

console.log(pizza.whatType());

pizza.handOut();
