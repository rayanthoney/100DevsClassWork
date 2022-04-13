//Create a button that adds 1 to a botScore stored in localStorage

const outputEl = document.querySelector('h2');

if (localStorage.getItem('score') !== null) {
  outputEl.textContent = localStorage.getItem('score');
}

document.querySelector('button').addEventListener('click', (e) => {
  const curNumber = Number(outputEl.textContent);

  outputEl.textContent = curNumber + 1;

  localStorage.setItem('score', outputEl.textContent);
});
