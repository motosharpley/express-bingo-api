// Import modules
const bingoCard = require('./bingoCard');
const ballDraw = require('./ballDraw');
const cardBinary = require('./cardBinary');
const patternEval = require('./patternEval');

// ********* Build Game ***********

// Draw All Balls
const allBallsDrawn = ballDraw.allBallsDrawn;
ballDraw.drawAllBalls();
// Interim Game Draw
const interimDraw = ballDraw.interimGameDraw;

const bingoGame = {
  allBallsDrawn: allBallsDrawn,
  interimDraw: interimDraw,
  gameId: 1,
  gameCoverAll: false,
  players: [
    player = {
      playerCard: null,
      prizeWon: 0,
      bonusType: 0,
      playerCoverAll: false
    },
  ]
};

function newBingoGame(bingoGame, allBallsDrawn) {
  // Initialize new game & build queue
  console.log(bingoGame.gameCoverAll);
  while (bingoGame.gameCoverAll === false) {

    // generate player card
    bingoCard.newCard();
    const playerCard = bingoCard.currentCardArray;
    // console.log(`player card: ${playerCard}`);

    let player = {
      playerCard: playerCard,
      prizeWon: 0,
      bonusType: 0,
      playerCoverAll: false
    };    

    // Check interim prize win
    cardBinary.cardPatternBinary(playerCard, interimDraw)
    let interimCardBinary = cardBinary.currentCardBinary;
    patternEval.checkWinPattern(interimCardBinary, patternBinary);

    // Check card for coverall == if no coverall get next card and add to game
    // if coverall end game
    cardBinary.cardPatternBinary(playerCard, allBallsDrawn);
    let playedCardBinary = cardBinary.currentCardBinary.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (patternEval.checkCoverall(playedCardBinary) === true) {
      bingoGame.gameCoverAll = true;
      player.playerCoverAll = true;
    }
    console.log(bingoGame.gameCoverAll);
    bingoGame.players.push(player);
  }
  // return bingoGame;
}

newBingoGame(bingoGame, allBallsDrawn);
console.log(bingoGame);

