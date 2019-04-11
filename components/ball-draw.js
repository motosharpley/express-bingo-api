function getNewBall() {
  return Math.floor((Math.random() * 75) + 1);
  
}

let allBallsDrawn = new Array;

function drawBall(){
  
  if(allBallsDrawn.length != 75){
    let currentBall = getNewBall();
    do {
      currentBall = getNewBall();
    } while (allBallsDrawn.includes(currentBall));
  
    return allBallsDrawn.push(currentBall);
  } else {
    alert("All Balls Have Been Drawn, Please Start New Game");
  }
  
}

// Draw intial 24 balls to start new game
// adjust the length of loop to change number of balls used
function interimGameDraw() {
  if(allBallsDrawn.length < 48){
    for(let i=0; i<24; i++){
      drawBall();
    }
  } else {
    alert("Must draw next ball")
  }

}
// end Game init ball draw

function drawAllBalls() {
  for(i=0; i<75; i++) {
    drawBall();
  }
}

// drawAllBalls();
// interimGameDraw();

console.log(allBallsDrawn);