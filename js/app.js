const squareElements = document.querySelectorAll('.sqr');
const messageElement = document.querySelector('#message');

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
  squareElements.forEach((square, index) => {
    square.textContent = board[index];
  });
}

const updateMessage = () => {
  if( winner === false && tie === false ) {
    messageElement.textContent = `It's player ${turn}'s turn`;
  } else if ( winner ===  false && tie === true ) {
    messageElement.textContent = "Cat's game!"
  } else {
    messageElement.textContent = `Player ${turn} has won!`
  }
};

const handleClick = (event) => { //solved my issue here... used evt not event
  const squareIndex = event.target.id; 
  if (board[squareIndex] !== '' || winner){
    return;
  }
  placePiece(squareIndex); // called handleClick on accident instead of placePiece
}

squareElements.forEach(square => {
  square.addEventListener('click', handleClick);
});

const placePiece = (index) => {
  board[index] = turn;
  console.log(board)
}

const render = () => {
  updateBoard();
  updateMessage();
};
