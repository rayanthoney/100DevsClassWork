//Create a constructor with 4 properties and 3 methods

function Pizza(type, cookTime, temp, numOfSlices) {
  this.type = type;
  this.cookTime = cookTime;
  this.temp = temp;
  this.numOfSlices = numOfSlices;

  this.instructions = function () {
    return `The pizza is going in the oven for ${this.cookTime} at ${this.temp} deg's`;
  };

  this.handOut = function () {
    for (let i = 0; i <= this.numOfSlices; i++) {
      console.log(`hand out pizza slice ${i}`);
    }
  };

  this.whatType = function () {
    return `we eating ${this.type} pizza today`;
  };
}

const pizza = new Pizza('supreme', '15min', 450, 8);
console.log(pizza.instructions());

console.log(pizza.whatType());

pizza.handOut();
