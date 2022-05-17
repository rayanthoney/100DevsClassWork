let arr = [1, 2, 3];
console.dir(arr);

let arrIterator = arr[Symbol.iterator]();
console.log(arrIterator);
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

let sym = Symbol('name');

let obj = {
  [Symbol('name')]: 'john',
};

// console.log(obj.getOwnPropertySymbols('name'));

// console.log(Symbol.for(sym.description));
console.log(sym.description);

// Let’s implement an iterable data structure. We’ll build a matrix class, acting as a two-dimensional array.

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    // builds the 2 dimension array one row at a time, using Y
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    // finds where it is in the array
    // ex: (0,2), width 2 : 2 * 2 = 4 + 0 = 4 so its the 4th element in the array
    return this.content[y * this.width + x];
  }
  // for changing the result of matrix at specific x,y location
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    // determines if end of the array
    if (this.y == this.matrix.height) return { done: true };

    // build value for logging
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    // increment x
    this.x++;
    // if x gets to the width then reset x
    if (this.x == this.matrix.width) {
      this.x = 0;
      // increment y to start next row since x hit the end
      this.y++;
    }
    return { value, done: false };
  }
}

// Symbol.iterator is what for...of uses
Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}

// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1

console.log(matrix);

// getter, setter, static method example
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30

// inhertiance example with symmetric matrix
//In other words, the value stored at x,y is always the same as that at y,x.

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix2 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix2);
console.log(matrix2.get(2, 3));
// → 3,2

///////////////////////////////////////
// Exercises
///////////////////////////////////////
console.log(`



START EXERCISE 1: A vector type


`);
// EXERCISE 1:
// A vector type

/*
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

// Your code here.
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    let sumX = this.x + vec.x;
    let sumY = this.y + vec.y;
    return new Vec(sumX, sumY);
  }

  minus(vec) {
    let diffX = this.x - vec.x;
    let diffY = this.y - vec.y;
    return new Vec(diffX, diffY);
  }

  get length() {
    // length from 0,0 using line distance formula
    let deltaX = Math.pow(this.x - 0, 2);
    let deltaY = Math.pow(this.y - 0, 2);
    return Math.sqrt(deltaX + deltaY);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

console.log(`



START EXERCISE 2: Groups


`);

// EXERCISE 2:
// Groups

/*
The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

*/

class Group {
  constructor(array) {
    this.array = array;
  }

  static from(iterator) {
    let arr = [];
    for (let i = 0; i < iterator.length; i++) {
      if (arr.indexOf !== -1) arr.push(iterator[i]);
    }
    return new Group(arr);
  }

  add(value) {
    if (this.array.indexOf(value) !== -1) return this;
    this.array.push(value);
    return this;
  }

  delete(value) {
    if (this.array.indexOf(value) === -1) return this;
    this.array = [
      ...this.array.slice(0, this.array.indexOf(value)),
      ...this.array.slice(this.array.indexOf(value) + 1),
    ];
    return this;
  }

  has(value) {
    return this.array.includes(value);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10).add(15).add(35);
console.log(group);

group.delete(10);
console.log(group.has(10));
// → false

console.log(group);

console.log(`



START EXERCISE 3: Iterable groups


`);

// EXERCISE 3:
// Iterable groups

/*
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.


*/

// Your code here (and the code from the previous exercise)

class GroupIterator {
  constructor(array) {
    this.array = array;
    this.i = 0;
    this.length = array.length;
  }

  next() {
    if (this.i === this.length) return { done: true };
    let result = { value: this.array[this.i], done: false };
    this.i++;
    return result;
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this.array);
};

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c

console.log(`



START EXERCISE 4: Borrowing a method


`);

// EXERCISE 4:
// Borrowing a method

/*
Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method anymore because the object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own property by that name?


*/

let map = { one: true, two: true, hasOwnProperty: true };

// Object.defineProperty(map, 'hasOwnProperty', {
//   get: function () {
//     return true;
//   },
//   set: function (input) {
//     return Object.prototype.hasOwnProperty.call(this, input);
//   },
// });

// console.log(map);
// // Fix this call
// console.log(map.hasOwnProperty('one'));

// Fix this call
console.log(Object.hasOwnProperty.call(map, 'one'));
// → true
