//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function tonyProSkater(name, age, legs, hands) {
  this.name = name;
  this.age = age;
  this.legs = legs;
  this.hands = hands;

  this.ollie = function () {
    console.log(`${this.name} did an ollie`);
  };

  this.sickkkkk = function () {
    console.log(`THAT WAS SICKKKKK`);
  };

  this.intro = function () {
    console.log(
      `${this.name} is ${this.age} years old and has ${this.legs} legs`
    );
  };
}

const jake = new tonyProSkater('Jake', 26, 2, 3);

jake.intro();
jake.ollie();
jake.sickkkkk();
