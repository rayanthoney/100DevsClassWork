// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
const x = 'smoothie   '.trim();
console.log(x);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const words = 'lemon pear apple';
if (words.includes('apple')) console.log('apple is there');

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game() {
  let chance = Math.floor(Math.random() * 3);
  return chance === 0 ? 'rock' : chance === 1 ? 'scissors' : 'paper';
}
console.log(game());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playGame(opp1, opp2) {
  const gameRules = {
    rock: {
      scissors: true,
      paper: false,
      rock: 'tie',
    },
    scissors: {
      scissors: 'tie',
      paper: true,
      rock: false,
    },
    paper: {
      paper: 'tie',
      rock: true,
      scissors: false,
    },
  };

  const result = gameRules[opp1][opp2];
  if (result === 'tie') {
    return 'tie';
  }

  if (result) {
    return 'opponent 1 won';
  }

  if (!result) {
    return 'opponent 2 won';
  }
  return gameRules[opp1][opp2];
}

console.log(playGame(game(), game()));
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameMore(x) {
  for (let i = 0; i < x; i++) {
    console.log(playGame(game(), game()));
  }
}

playGameMore(10);
