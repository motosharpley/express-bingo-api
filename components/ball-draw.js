function getNewBall() {
  return Math.floor((Math.random() * 75) + 1);
  
}

let allBallsDrawn = new Array;

function drawBall(){
  let currentBall = getNewBall();
  do {
    currentBall = getNewBall();
  } while (allBallsDrawn.includes(currentBall));

  return allBallsDrawn.push(currentBall);  
}

// Draw intial 24 balls to start new game
// adjust the length of loop to change number of balls used
function interimGameDraw() {
    for(let i=0; i<24; i++){
      drawBall();
    }
}
// end Game init ball draw

// Draw all 75 balls for a bingo game
function drawAllBalls() {
  for(i=0; i<75; i++) {
    drawBall();
  }
}

// drawAllBalls();
// interimGameDraw();

console.log(allBallsDrawn);