'use strict';
// import { keyExample } from '../secrets/APIKEYS.js';

//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

{
  /* 
<section class="card">
  <h2 id="title">Margarita</h2>
  <div class="img-box" id="img-js"></div>
  <h3>Instructions</h3>
  <p>
    Rub the rim of the glass with the lime slice to make the salt stick to
    it. Take care to moisten only the outer rim and sprinkle the salt on
    it. The salt should present to the lips of the imbiber and never mix
    into the cocktail. Shake the other ingredients with ice, then
    carefully pour into the glass.
  </p>
</section> */
}

/**
 *
 * @param {string} drinkName
 * @param {img url, string} img
 * @param {string} instructions
 * @returns section HTML element
 */
function createDrinkCard(drinkName, img, instructions) {
  // create all elements required
  const cardEl = document.createElement('section');
  const titleEl = document.createElement('h2');
  const imgBoxEl = document.createElement('div');
  const instructionsTitleEl = document.createElement('h3');
  const instructionsEl = document.createElement('p');

  // fill element info
  cardEl.classList.add('card');

  titleEl.id = 'title';
  titleEl.textContent = drinkName;

  imgBoxEl.classList.add('img-box');
  imgBoxEl.id = 'img-js';
  imgBoxEl.style.backgroundImage = `url(${img})`;

  instructionsTitleEl.textContent = 'Instructions';

  instructionsEl.textContent = instructions;

  // fill card element

  cardEl.appendChild(titleEl);
  cardEl.appendChild(imgBoxEl);
  cardEl.appendChild(instructionsTitleEl);
  cardEl.appendChild(instructionsEl);

  return cardEl;
}

/**
 *
 * @param {HTMLElement} containerEl
 * @param {String} cardClass
 * side Effect: translateX all cards right to center them
 */
function centerCardsInCarousel(containerEl, cardClass) {
  // isolate element children top only include class

  const childArr = Array.from(containerEl.children);
  const onlyCardElements = childArr.filter((el) =>
    Array.from(el.classList).includes(cardClass)
  );

  // const cardEl = onlyCardElements[0];
  const { width, marginLeft } = window.getComputedStyle(onlyCardElements[0]);
  const totalCardWidth =
    parseInt(width) + parseInt(marginLeft) + parseInt(marginLeft);

  const translateAmount =
    (onlyCardElements.length * totalCardWidth) / 2 - totalCardWidth / 2;

  onlyCardElements.forEach(
    (el) => (el.style.transform = `translateX(${translateAmount}px)`)
  );
  console.log(translateAmount);
  const dimensionsObj = {
    cardWidth: width,
    cardLeftMargin: marginLeft,
  };
  console.log(dimensionsObj);
  console.log(onlyCardElements);
}

/**
 *
 * @param {EventListenerObject} e
 * @sideEffect changes card element translateX
 */
function slideCards(e) {
  const containerEl = e.target.parentElement;
  const buttonClicked = e.target.id.split('-')[0];
  // no elements in parent
  if (containerEl.children.length <= 2) return;

  // using class card is bad for refactoring CSS
  const cardArr = Array.from(containerEl.children).filter((el) =>
    Array.from(el.classList).includes('card')
  );

  const { width, marginLeft } = window.getComputedStyle(cardArr[0]);

  const totalCardWidth =
    parseInt(width) + parseInt(marginLeft) + parseInt(marginLeft);
  let currentTranslateX = parseInt(
    cardArr[0].style.transform.split('(')[1].split(')')[0]
  );

  // could do Math.abs(currentTranslateX) + totalCardWidth / 2 but it causes another bug
  if (Math.abs(currentTranslateX) >= (totalCardWidth * cardArr.length) / 2)
    currentTranslateX = -1 * currentTranslateX;

  console.log({
    currentTranslateX,
    math: currentTranslateX - totalCardWidth / 2,
  });

  const elementTranslateMathObj = {
    left: currentTranslateX + totalCardWidth / 2,
    right: currentTranslateX - totalCardWidth / 2,
  };
  // console.log(buttonClicked);

  // change TranslateX
  cardArr.forEach(
    (el) =>
      (el.style.transform = `translateX(${elementTranslateMathObj[buttonClicked]}px)`)
  );
}

const cardContainer = document.querySelector('#card-house');
// centerCardsInCarousel(cardContainer, 'card');

document.querySelector('button').addEventListener('click', (e) => {
  let inputValue = document.querySelector('input').value;

  inputValue;

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      data.drinks.forEach((c) => {
        const el = createDrinkCard(
          c.strDrink,
          c.strDrinkThumb,
          c.strInstructions
        );

        cardContainer.appendChild(el);
      });
      centerCardsInCarousel(cardContainer, 'card');
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

document.querySelector('#left-arrow').addEventListener('click', slideCards);
document.querySelector('#right-arrow').addEventListener('click', slideCards);
