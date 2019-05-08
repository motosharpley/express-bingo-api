const ballDraw = {};

function getNewBall() {
  return Math.floor((Math.random() * 75) + 1);  
}

ballDraw.allBallsDrawn = new Array;
ballDraw.interimGameDraw = new Array;

ballDraw.drawBall = function() {
  let currentBall = getNewBall();
  do {
    currentBall = getNewBall();
  } while (ballDraw.allBallsDrawn.includes(currentBall));

  return ballDraw.allBallsDrawn.push(currentBall);  
}

// Draw intial 24 balls to start new game
// adjust the length of loop to change number of balls used
ballDraw.drawInterimGame = function() {
    for(let i=0; i<24; i++){
      ballDraw.interimGameDraw.push(ballDraw.allBallsDrawn[i])
    }
}
// end Game init ball draw

// Draw all 75 balls for a bingo game
ballDraw.drawAllBalls = function() {
  for(i=0; i<75; i++) {
    ballDraw.drawBall();
  }
  ballDraw.drawInterimGame();
}

// ballDraw.drawAllBalls();
// interimGameDraw();

// console.log(ballDraw.allBallsDrawn);
// console.log(ballDraw.interimGameDraw);

module.exports = ballDraw;