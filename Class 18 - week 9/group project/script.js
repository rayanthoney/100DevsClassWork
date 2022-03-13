'use strict'; // has to be first line
// let audio1 = document.getElementById("monkey");
// let audio2 = document.getElementById("elephant");
// let audio3 = document.getElementById("lion");
// let audio4 = document.getElementById("bear");

// audio1.addEventListener("click", function () {
//   let audio = new Audio("/resources/monkeysound.mp3");
//   audio.play();
// });

// audio2.addEventListener("click", function () {
//   let audio = new Audio("/resources/elephantsound.mp3");
//   audio.play();
// });

// audio3.addEventListener("click", function () {
//   let audio = new Audio("/resources/Lion Roar-SoundBible.com-718441804.mp3");
//   audio.play();
// });

// audio4.addEventListener("click", function () {
//   let audio = new Audio("/resources/Bear Growling-SoundBible.com-2376031.mp3");
//   audio.play();
// });

// event listener
// thumbs up src: src="https://img.icons8.com/ios-glyphs/30/000000/thumb-up--v1.png"

const optionsBtnNodeList = document.querySelectorAll('#option-selection');

Array.from(optionsBtnNodeList).map((curEl) => {
  curEl.addEventListener('click', (e) => {
    console.log('working');
    console.dir(e.target);
    // if(e.target)
  });
});
