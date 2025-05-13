const ballDraw = {};

// Initialize the ball pool with numbers 1-75
ballDraw.ballPool = Array.from({ length: 75 }, (_, i) => i + 1);

// Shuffle function using Fisher-Yates algorithm
ballDraw.shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Create a copy of the shuffled array for drawing
ballDraw.resetBallPool = function () {
  ballDraw.shuffleArray(ballDraw.ballPool); // Always shuffle the ball pool
  ballDraw.originalShuffledPool = [...ballDraw.ballPool];
  ballDraw.currentPool = [...ballDraw.originalShuffledPool];
};

// Draw a ball by popping from the current pool
ballDraw.drawBall = function () {
  if (!ballDraw.currentPool || ballDraw.currentPool.length === 0) {
    ballDraw.resetBallPool();
  }
  return ballDraw.currentPool.pop();
};

// Draw initial 24 balls to start a new game
ballDraw.drawInterimGame = function () {
  ballDraw.interimGameDraw = [];
  for (let i = 0; i < 24; i++) {
    ballDraw.interimGameDraw.push(ballDraw.allBallsDrawn[i]);
  }
};

// Draw all 75 balls for a bingo game
ballDraw.drawAllBalls = function () {
  ballDraw.allBallsDrawn = [];
  while (ballDraw.currentPool && ballDraw.currentPool.length > 0) {
    ballDraw.allBallsDrawn.push(ballDraw.drawBall());
  }
  ballDraw.drawInterimGame();
};

module.exports = ballDraw;
