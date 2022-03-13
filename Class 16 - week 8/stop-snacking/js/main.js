//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function stopSnacking() {
  const inputElValue = Number(document.querySelector('input').value);
  const placeTextEl = document.querySelector('#stops');
  placeTextEl.textContent = '';
  for (let i = 0; i < inputElValue; i++) {
    placeTextEl.textContent += 'stop snacking ';
  }
}

document.querySelector('#help').addEventListener('click', stopSnacking);
