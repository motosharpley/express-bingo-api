// Import modules
const bingoCard = require('./bingoCard');
const ballDraw = require('./ballDraw');

// Draw all Balls
const allBallsDrawn = ballDraw.allBallsDrawn;
ballDraw.drawAllBalls();

// Interim Game Draw
const interimDraw = ballDraw.interimGameDraw;

// generate player card
const playerCard = bingoCard.currentCardArray;
bingoCard.newCard();


// ********* Build Game ***********

// Initialize new game & build queue
const bingoGame = {
  allBallsDrawn: allBallsDrawn,
  interimDraw: interimDraw,
  gameId: 1,
  players: {
    playerCard,
    prizeWon: 0,
    bonusType: 0
  }
};



// Check interim prize win

// Check card for coverall == if no coverall get next card and add to game
// if coverall end game

console.log(bingoGame);