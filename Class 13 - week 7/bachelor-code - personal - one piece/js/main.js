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

/*

    <section class="pirate-container">
      <section class="pirate straw-hats shadow" id="pirate-1">
        <h2>Straw Hats</h2>
      </section>
      <section class="pirate shadow" id="pirate-2">zoro</section>
      <section class="pirate shadow" id="pirate-3">guy</section>
    </section>

*/

// random function
function randomPick(max) {
  return Math.floor(Math.random() * max);
}

//  start choices
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
  console.log(clickedElPirateTypeClass);
});
