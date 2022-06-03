const nameInputEl = document.querySelector('#name');

const btnEl = document.querySelector('#nameBTN');

btnEl.addEventListener('click', (e) => {
  fetch('/api', {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: nameInputEl.value.toLowerCase() }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
});
