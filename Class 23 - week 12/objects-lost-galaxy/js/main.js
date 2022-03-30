//Create a dog object that has four properties and three methods

const dogObj = new Object();
dogObj.breed = 'mutt';
dogObj.furColor = 'brown';
dogObj.eyeColor = 'blue';
dogObj.legs = 4;

dogObj.bark = function () {
  console.log('WOOF WOOF');
};

dogObj.sit = function () {
  console.log(`The ${this.breed} with ${this.eyeColor} eyes sit`);
};

dogObj.howManyLegs = function () {
  console.log(`the dog has ${this.legs} legs`);
};

dogObj.bark();
dogObj.sit();
dogObj.howManyLegs();
