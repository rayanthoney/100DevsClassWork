//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function Fighter(name, weight, height, dominateHand) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.dominateHand = dominateHand;

  this.whichHand = function () {
    return `fighter is ${this.dominateHand} handed`;
  };

  this.howTall = function () {
    return `fighter is ${this.height} tall`;
  };

  this.intro = function () {
    return `Today's fighter is ${this.name}, coming in at ${this.weight} lbs and ${this.height} tall!!!`;
  };
}

const fighterGuy = new Fighter('Lee', 150, '66in', 'right');

console.log(fighterGuy.whichHand());
console.log(fighterGuy.howTall());
console.log(fighterGuy.intro());
