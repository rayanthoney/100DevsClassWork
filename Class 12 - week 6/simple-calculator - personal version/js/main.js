'use strict';

const calculatorEl = document.querySelector('#calculator-container');
const resultEl = document.querySelector('#placeToPutResult');

let total = 0;
// event delegation
calculatorEl.addEventListener('click', (e) => {
  const targetTextArr = e.target.innerText.split('');

  switch (targetTextArr[0]) {
    case '+':
      total += Number(targetTextArr[1]);
      break;
    case '-':
      total -= Number(targetTextArr[1]);
      break;
    case '*':
      total *= Number(targetTextArr[1]);
      break;
  }
  updateResult(total);
});

function updateResult(value) {
  // put a comma every 3 characters
  if (String(value).length >= 4) {
    const newValue = [];
    String(value)
      .split('')
      .reverse()
      .forEach((char, i, arr) => {
        newValue.unshift((i + 1) % 3 === 0 ? `,${char}` : char);
      });
    // fix/remove comma from front of numbers 6 digits or more
    if (newValue.length % 3 === 0 && newValue.length > 3) {
      newValue[0] = newValue[0].split('').pop();
    }

    resultEl.innerText = newValue.join('');
  }

  if (String(value).length >= 4) return;
  resultEl.innerText = value;
}
