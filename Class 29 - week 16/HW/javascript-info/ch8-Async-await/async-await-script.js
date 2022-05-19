// https://javascript.info/async-await

//tasks
// exercise 1: Rewrite using async/await

// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

// then/catch version
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

//async version

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  }
  throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json').catch(console.error); // Error: 404

console.log(`


start exercise 2: Rewrite "rethrow" with async/await


`);
// exercise 2: Rewrite "rethrow" with async/await
/*

Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.

And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.


*/

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

// refactored to async/await
async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  }

  throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let user;

  while (true) {
    let name = prompt('Enter a name?', 'iliakan');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // no error, exit loop
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // loop continues after the alert
        alert('No such user, please reenter.');
        return demoGithubUser();
      } else {
        // unknown error, rethrow
        throw err;
      }
    }
  }
  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();

console.log(`


start exercise 3: Call async from non-async


`);
// exercise 3: Call async from non-async

/*
We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?


*/

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
  // shows 10 after 1 second
  wait().then((result) => console.log(`made it out: ${result}`));
}

f();
