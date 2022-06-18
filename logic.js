let players = ['x', 'o'];
let activePlayer = '';
let playArea = [['', '', ''], ['', '', ''], ['', '', '']];
let win = '';

function startGame() {
  playArea = [['', '', ''], ['', '', ''], ['', '', '']];
  activePlayer = 0;
  win = '';
  renderBoard(playArea);
}

function click(row, col) {

  if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;        
    }
  
  playArea[row][col] = players[activePlayer];
  renderBoard(playArea);
  
    let a1 = playArea[0][0];
    let a2 = playArea[0][1];
    let a3 = playArea[0][2];
    let a4 = playArea[1][0];
    let a5 = playArea[1][1];
    let a6 = playArea[1][2];
    let a7 = playArea[2][0];
    let a8 = playArea[2][1];
    let a9 = playArea[2][2];
    
    if ((a1==a4 && a1==a7 && a1 != '') || (a2==a5 && a2==a8 && a2 != '') || (a3==a6 && a3==a9 && a3 != '') || (a1==a2 && a1==a3 && a1 != '') || (a4==a5 && a4==a6 && a4 != '') || (a7==a8 && a7==a9 && a7 != '') || (a1==a5 && a1==a9 && a1 != '') || (a3==a5 && a3==a7 && a3 != '')) { 
           win = activePlayer;
          } 
  
  
  
  if (win != '') {
    showWinner(win);
  } 
 }