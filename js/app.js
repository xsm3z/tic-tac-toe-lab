/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/

const squareElements = document.querySelectorAll('.sqr');
const messageElement = document.querySelector('#message');

console.log(squareElements);
console.log(messageElement);

const winningCombos = [
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ],
  [ 0, 3, 6 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 0, 4, 8 ],
  [ 6, 4, 2 ]
]

let board = [
  '', '', '',
  '', '', '',
  '', '', ''
]; 
let turn = 'x';
let winner = false;
let tie = false; 

const init = () => {
  console.log('Game has started');
  render();
};

window.onload = init;

const updateBoard = () => {
  board.forEach((value, idx) => {
    const square = squareElements[idx];
    square.textContent = value;
  });
};

const updateMessage = () => {
  if( winner === false && tie === false ) {
    messageElement.textContent = `It's player ${turn}'s turn`;
  } else if ( winner ===  false && tie === true ) {
    messageElement.textContent = "Cat's game!"
  } else {
    messageElement.textContent = `Player ${turn} has won!`
  }
};

const render = () => {
  updateBoard();
  updateMessage();
};

/*----------------------------- Event Listeners -----------------------------*/