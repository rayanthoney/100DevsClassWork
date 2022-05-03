//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(color, maxShots, modes, price) {
    this.color = color;
    this.maxShots = maxShots;
    this.modes = modes;
    this.price = price;
  }

  makeEspresso() {
    return `one shot made`;
  }

  howMuch() {
    return this.price;
  }

  describe() {
    return `This is a ${this.color} Espresso Machine`;
  }
}

// /['pour', 'make']

const em = new EspressoMachine('brown', 2, ['pour', 'make'], 1150);

console.log(em);
