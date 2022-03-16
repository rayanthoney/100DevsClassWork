'use strict';

// eloquent JS | Ch 2 - program structure

//Looping a triangle

for (let i = 1; i <= 7; i++) {
  console.log(Array(i).fill('#', 0, i).join(''));
}

console.clear();

// fizzbuzz

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    let check5 = i % 5 === 0;
    let check3 = i % 3 === 0;
    const result =
      check5 && check3 ? 'FizzBuzz' : check3 ? 'Fizz' : check5 ? 'Buzz' : i;
    console.log(result);
  }
}
fizzBuzz();

console.clear();

// Chessboard

// write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

function generateChessBoard(size) {
  const board = [];

  for (let i = 0; i <= size; i++) {
    const even = i % 2 === 0;

    if (even) {
      board.push(
        Array(size)
          .fill('#')
          .map((cur, i) => (!(i % 2 === 0) ? cur : ' '))
          .join('')
      );
    } else {
      board.push(
        Array(size)
          .fill('#')
          .map((cur, i) => (i % 2 === 0 ? cur : ' '))
          .join('')
      );
    }
  }

  for (let i = 0; i <= board.length; i++) {
    console.log(board[i]);
  }
}

generateChessBoard(8);
generateChessBoard(12);
