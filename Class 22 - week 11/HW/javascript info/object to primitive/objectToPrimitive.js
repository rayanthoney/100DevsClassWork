'use strict';

// https://javascript.info/object-toprimitive

let me = {
  name: 'ryan',
  age: 24,
  hands: true,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.age;
  },
};

console.log(me);
alert(me);
alert(+me);

console.log(me.__proto__);
console.log(me.toString());
console.log(me.valueOf());
