// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

const fetchPromise = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

console.log(fetchPromise);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    console.log(json[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

console.log('Started request...');
