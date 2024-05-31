/*-------------------------------- Constants --------------------------------*/

const squareElements = document.querySelectorAll('.sqr');
const messageElement = document.querySelector('#message');

console.log(squareElements);
console.log(messageElement);



/*---------------------------- Variables (state) ----------------------------*/

let board = [ '', '', '', '', '', '', '', '', '' ]; 
let turn = 'x';
let winner = false;
let tie = false; 

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const init = () => {
  console.log('Game has started')
  render()
}

init()

const render = () => {

}

/*----------------------------- Event Listeners -----------------------------*/
