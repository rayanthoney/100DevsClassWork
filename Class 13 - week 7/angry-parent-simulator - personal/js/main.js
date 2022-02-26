const inputElArr = document.querySelectorAll('input');
const outputEl = document.querySelector('#placeToYell');
const buttonEl = document.querySelector('#yell');

buttonEl.addEventListener('click', (e) => {
  const nameArr = Array.from(inputElArr).map((el) => el.value);

  outputEl.textContent = `${nameArr[0]} ${nameArr[1]} ${nameArr[2]} ${nameArr[3]}`;
});
