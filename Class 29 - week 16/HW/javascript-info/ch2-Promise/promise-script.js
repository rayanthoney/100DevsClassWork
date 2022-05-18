//https://javascript.info/promise-basics

//TASKS

// EXERCISE 1: Re-resolve a promise?
//What’s the output of the code below?

let promise = new Promise(function (resolve, reject) {
  resolve(1);
  // never runs
  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // 1 will be alerted because promises can only have one outcome

// EXERCISE 2: Delay with a promise
/*
The built-in function setTimeout uses callbacks. Create a promise-based alternative.

The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

*/

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => console.log('runs after 3 seconds'));

// EXERCISE 3: Animated circle with promise

/*
Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

The new usage:
*/

// animate circle with callback (taken from another example)
function go() {
  // showCircle(150, 150, 100, (div) => {
  //   div.classList.add('message-ball');
  //   div.append('Hello, world!');
  // });
  showCircle(150, 150, 100).then((div) => {
    console.log(div);
    console.log('here');
    div.classList.add('message-ball');
    div.append('Hello, world!');
  });
}

// function showCircle(cx, cy, radius, callback) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   setTimeout(() => {
//     div.style.width = radius * 2 + 'px';
//     div.style.height = radius * 2 + 'px';

//     div.addEventListener('transitionend', function handler() {
//       div.removeEventListener('transitionend', handler);
//       callback(div);
//     });
//   }, 0);
// }

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      // The transitionend event is fired when a CSS transition has completed
      div.addEventListener('transitionend', function handler() {
        // removes itself (the event listener)
        div.removeEventListener('transitionend', handler);

        resolve(div);
      });
    }, 0);
  });
}
