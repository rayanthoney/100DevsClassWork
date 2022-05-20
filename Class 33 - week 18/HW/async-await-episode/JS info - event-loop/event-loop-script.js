//https://javascript.info/event-loop

//Use-case 1: splitting CPU-hungry tasks

///////////////////////////////////////////// example 1
// about 1495 ms - froze the page
// let i = 0;

// let start = Date.now();

// function count() {
//   // do a heavy job
//   for (let j = 0; j < 1e9; j++) {
//     i++;
//   }

//   alert('Done in ' + (Date.now() - start) + 'ms');
// }

// count();

///////////////////////////////////////////// example 2
// about 6883ms - didn't freeze the page
// let i = 0;

// let start = Date.now();

// function count() {
//   // do a piece of the heavy job (*)
//   do {
//     i++;
//     // stops at i = 1,000,000 because modulus of 1000000 is 0 and ever 1 mil increment
//   } while (i % 1e6 != 0);

//   if (i == 1e9) {
//     alert('Done in ' + (Date.now() - start) + 'ms');
//   } else {
//     setTimeout(count); // schedule the new call (**)
//   }
// }

// count();
///////////////////////////////////////////// example 3
// about 5149ms - didn't freeze the page
// let i = 0;

// let start = Date.now();

// function count() {
//   // move the scheduling to the beginning
//   // 1_000_000_000 - 1_000_000 = 999_000_000
//   // makes it so the last count doesn't go into the macrotask queue
//   if (i < 1e9 - 1e6) {
//     setTimeout(count); // schedule the new call
//   }

//   do {
//     i++;
//     // stops at i = 1,000,000 because modulus of 1_000_000 is 0 and ever 1 million increment
//   } while (i % 1e6 != 0);

//   if (i == 1e9) {
//     alert('Done in ' + (Date.now() - start) + 'ms');
//   }
// }

// count();

// Use case 2: progress indication
// code in html document

// Use case 3: doing something after the event
// no idea

// let start;
// const menu = document.querySelector('button');
// menu.onclick = function () {
//   // ...

//   // create a custom event with the clicked menu item data
//   let customEvent = new CustomEvent('menu-open', {
//     bubbles: true,
//   });

//   // dispatch the custom event asynchronously
//   setTimeout(() => {
//     start = Date.now();
//     menu.dispatchEvent(customEvent);
//   }, 5);
// };

// document.addEventListener('menu-open', (e) => {
//   console.log(e);
//   console.log('was clicked ' + (Date.now() - start) + 'ms ago');
// });

// microtasks

// setTimeout(() => alert('timeout'));

// Promise.resolve().then(() => alert('promise'));

// alert('code');

//////////////////////////////////
// tasks: What will be the output of this code?

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

/*
my guess:
output:
1
7
3
5
4 // wrong
2
6

actual answer:
output:
1
7
3
5
2
6
4 // different
 */

// explanation

console.log(1);
// The first line executes immediately, it outputs `1`.
// Macrotask and microtask queues are empty, as of now.

setTimeout(() => console.log(2));
// `setTimeout` appends the callback to the macrotask queue.
// - macrotask queue content:
//   `console.log(2)`

Promise.resolve().then(() => console.log(3));
// The callback is appended to the microtask queue.
// - microtask queue content:
//   `console.log(3)`

Promise.resolve().then(() => setTimeout(() => console.log(4)));
// The callback with `setTimeout(...4)` is appended to microtasks
// - microtask queue content:
//   `console.log(3); setTimeout(...4)`

Promise.resolve().then(() => console.log(5));
// The callback is appended to the microtask queue
// - microtask queue content:
//   `console.log(3); setTimeout(...4); console.log(5)`

setTimeout(() => console.log(6));
// `setTimeout` appends the callback to macrotasks
// - macrotask queue content:
//   `console.log(2); console.log(6)`

console.log(7);
// Outputs 7 immediately.

/*
To summarize,

Numbers 1 и 7 show up immediately, because simple console.log calls don’t use any queues.
Then, after the main code flow is finished, the microtask queue runs.
It has commands: console.log(3); setTimeout(...4); console.log(5).
Numbers 3 и 5 show up, while setTimeout(() => console.log(4)) adds the console.log(4) call to the end of the macrotask queue.
The macrotask queue is now: console.log(2); console.log(6); console.log(4).
After the microtask queue becomes empty, the macrotask queue executes. It outputs 2, 6, 4.
Finally, we have the output: 1 7 3 5 2 6 4.


*/
