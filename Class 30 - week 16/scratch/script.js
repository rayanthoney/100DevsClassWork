let boxes = document.querySelectorAll('.box');
console.log(boxes);

let clickedBox;

Array.from(boxes).forEach((el) =>
  el.addEventListener('click', function (e) {
    console.log(e.target);
  })
);

localStorage.setItem('state', '');

function stateMachine(state) {
  localStorage.setItem('state', `${state}`);
  switch (state) {
    case 'newGame':
      console.log('New Game');
      break;
    case 'userTurn':
      console.log('Users Turn');
      break;
    case 'aiTurn':
      console.log('AI Turn');
    default:
      console.log('Requires State');
  }
}

function aiTurn() {
  // for each
}

class Board {
  constructor(boxes) {
    this.boxes = boxes;
    //current turn?
  }
  //placePiece()
  //checkWin()
}
