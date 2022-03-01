'use strict';

// github task section - code each solution with a while loop and a for loop
//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// *****************************************************************
// task 1 - Carousel

// while version

let currentCarouselTurns = 1;
let carouselUserInput = Number(prompt('Enter number of Carousel Turns: ', 10));

// while (currentCarouselTurns <= carouselUserInput) {
//   console.log(`current Carousel Turn: ${currentCarouselTurns}`);
//   currentCarouselTurns++;
// }

// for loop version
for (let i = 0; i <= carouselUserInput; i++) {
  console.log(`current Carousel Turn: ${i}`);
}
