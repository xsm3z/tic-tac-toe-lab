const squareElements = document.querySelectorAll('.sqr');
const messageElement = document.querySelector('#message');
const resetElement = document.querySelector('#reset-button')

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
}

window.onload = init;

const updateBoard = () => {
  squareElements.forEach((square, index) => {
    square.textContent = board[index];
  })
}

const updateMessage = () => {
  if( winner === false && tie === false ) {
    messageElement.textContent = `Player ${turn.toUpperCase()}, GO!`;
  } else if ( winner ===  false && tie === true ) {
    messageElement.textContent = "womp womp"
  } else {
    messageElement.textContent = `Player ${turn.toUpperCase()} wins!`
  }
}

const handleClick = (event) => { 
  const squareIndex = event.target.id; 
  if (board[squareIndex] !== '' || winner){
    return;
  }
  placePiece(squareIndex); 
  checkForWinner ();
  checkForWinner();
  checkForTie();
  switchPlayerTurn()
  render()
}

const placePiece = (index) => {
  board[index] = turn;
  console.log(board)
}

const checkForWinner = () => {
  for (let winningCombo of winningCombos) {
    const [ a, b, c ] = winningCombo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
      return;
    }
 }
}

const checkForTie = () => {
  if (winner === false && board.every(square => square != '')) {
    tie = true;
  } else {
    return;
  }
}

const switchPlayerTurn = () => {
  if (winner === false) {
    if (turn === 'x') {
      turn = 'o';
    } else {
      turn = 'x';
    }
  }
}

const reset = () => {
  board = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]; 
  
  turn = 'x';
  winner = false;
  tie = false; 

  render()
}



const render = () => {
  updateBoard();
  updateMessage();
}

squareElements.forEach(square => {
  square.addEventListener('click', handleClick);
})

resetElement.addEventListener('click', reset);
