//Create an a class and extend it - Can be anything you would like it to be!

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Male extends Human {
  constructor(name, age, hasCar) {
    super(name, age);
    this.hasCar = hasCar;
  }
}

const boy = new Male('ryan', 24, true);
console.log(boy);
