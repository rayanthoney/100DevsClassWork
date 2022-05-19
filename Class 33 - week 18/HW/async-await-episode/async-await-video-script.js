// https://www.youtube.com/watch?v=vn3tm0quoqE

//L1
// console.log('🥪 Synchronous 1');

//L2
// setTimeout((_) => console.log(`🍅 Timeout 2`), 0); // 0secs

//L3
// Promise.resolve().then((_) => console.log('🍍 Promise'));

//L4
// console.log('🥪 Synchronous 2');

// order: L1, L4, L3, L2

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
  .then((res) => res.json())
  .then((user) => console.log('😀', user.title))
  .catch((err) => console.error('😭', err));

console.log('🥪 Synchronous');
