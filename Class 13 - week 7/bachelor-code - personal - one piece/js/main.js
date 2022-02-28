// 3 adjectives
// a pick between options, hide other options
// a pick who is next
// a pick who won

'use strict';

// pirates set up
const pirateCrews = [
  {
    id: 1,
    name: 'Straw Hats',
  },
  {
    id: 2,
    name: 'Kid Pirates',
  },
  {
    id: 3,
    name: 'Firetank Pirates',
  },
  {
    id: 4,
    name: 'Heart Pirates',
  },
  {
    id: 5,
    name: 'Barto Club',
  },
  {
    id: 6,
    name: 'Hawkins Pirates',
  },
  {
    id: 7,
    name: 'Beautiful Pirates',
  },
  {
    id: 8,
    name: 'Bonney Pirates',
  },
  {
    id: 9,
    name: 'Caribou Pirates',
  },
  {
    id: 10,
    name: 'Fallen Monk Pirates',
  },
  {
    id: 11,
    name: 'Spade Pirates',
  },
  {
    id: 12,
    name: 'Drake Pirates',
  },
];

// pirate contain HTML setup
const pirateContainerEL = document.createElement('section');
pirateContainerEL.classList.add('pirate-container', 'curtain');

function createPirateElement(pirate) {
  const pirateCSS = pirate.name.toLowerCase().split(' ').join('-');

  // set up container
  const pirateEL = document.createElement('section');
  pirateEL.classList.add(...['pirate', 'shadow', pirateCSS]);

  // set up title el
  const pirateELHeader = document.createElement('h2');
  // fill heading element
  pirateELHeader.textContent = pirate.name;

  // place header in container
  pirateEL.appendChild(pirateELHeader);

  return pirateEL;
}

function createResetButton() {
  // setup btn
  const resetBtn = document.createElement('button');
  resetBtn.classList.add('btn', 'reset-btn');

  // setup reset icon
  const resetBtnInnerImg = document.createElement('img');
  resetBtnInnerImg.setAttribute(
    'src',
    'https://img.icons8.com/ios-filled/50/000000/recurring-appointment.png'
  );

  // fill btn
  resetBtn.appendChild(resetBtnInnerImg);

  document.querySelector('body').appendChild(resetBtn);
}

// random function
function randomPick(max) {
  return Math.floor(Math.random() * max);
}

function elementRemover(parentEl, pirateClass) {
  Array.from(parentEl.childNodes).forEach((curEl) => {
    if (!curEl.classList.contains(pirateClass)) curEl.remove();
  });
}

function resetEverything() {
  pirateContainerEL.remove();
}

/******************************************
/* start choices
/*******************************************/
document.querySelector('.btn').addEventListener('click', (e) => {
  e.target.classList.add('hidden');

  pirateContainerEL.appendChild(
    createPirateElement(pirateCrews[randomPick(12)])
  );
  pirateContainerEL.appendChild(
    createPirateElement(pirateCrews[randomPick(12)])
  );
  pirateContainerEL.appendChild(
    createPirateElement(pirateCrews[randomPick(12)])
  );

  document
    .querySelector('body')
    .insertAdjacentElement('beforeend', pirateContainerEL);
});

// pirate chooses
document.querySelector('body').addEventListener('click', (e) => {
  // guard clause because on body
  if (!e.target.classList.contains('pirate')) return;

  const clickedElPirateTypeClass = e.target.classList.value.split(' ').pop();

  elementRemover(pirateContainerEL, clickedElPirateTypeClass);
  createResetButton();
});

//reset button remove elements
document.querySelector('body').addEventListener('click', (e) => {
  if (
    e.target.classList.contains('reset-btn') ||
    e.target.parentElement.classList.contains('reset-btn')
  ) {
    document.querySelectorAll('.pirate').forEach((el) => el.remove());
    document.querySelector('.pirate-container').remove();
    document.querySelector('.hidden').classList.remove('hidden');
    document.querySelector('.reset-btn').remove();
  }
});
