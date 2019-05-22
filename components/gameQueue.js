// Import modules
const bingoCard = require('./bingoCard');
const ballDraw = require('./ballDraw');
const cardBinary = require('./cardBinary');
const patternEval = require('./patternEval');

// ********* Build Game ***********
let gameQueue = [];


function newBingoGame() {
  // Draw All Balls
  const allBallsDrawn = ballDraw.allBallsDrawn;
  ballDraw.drawAllBalls();
  // Interim Game Draw
  const interimDraw = ballDraw.interimGameDraw;
  // Initialize new game & build queue
  const bingoGame = {
    allBallsDrawn: allBallsDrawn,
    interimDraw: interimDraw,
    gameId: 1,
    gameCoverAll: false,
    players: []
  };
  let cardIndex = 25;
  while (bingoGame.gameCoverAll === false) {

    // generate player card
    bingoCard.currentCardArray = [];
    bingoCard.anotherCard();
    let playerCard = bingoCard.currentCardArray;
    console.log('player card:' + playerCard);
    

    // Check interim prize win
    console.log('checking interim prize')
    cardBinary.cardPatternBinary(playerCard, interimDraw)
    let interimCardBinary = cardBinary.currentCardBinary;

    patternEval.checkWinPattern(interimCardBinary, patternEval.winningPatterns);
    cardBinary.currentCardBinary=[];
    // Check card for coverall == if no coverall get next card and add to game
    // if coverall end game
    console.log('checking coverall');
    
    patternEval.drawArray = [];
    patternEval.getDrawIndex(cardIndex, allBallsDrawn);
    let currentDrawArray = patternEval.drawArray;
    console.log(currentDrawArray.length);
    console.log('currentDrawArray: ' + currentDrawArray);
    cardIndex++;
    console.log('cardIndex' + cardIndex);

    let player = { 
      playerCard: playerCard,
      currentDrawArray: currentDrawArray,
      prizeWon: 0,
      bonusType: 0,
      playerCoverAll: false
    };

    cardBinary.cardPatternBinary(playerCard, currentDrawArray);
    let playedCardBinary = cardBinary.currentCardBinary;
    console.log('playedCardBinary ' + playedCardBinary);
    if (patternEval.checkCoverall(playedCardBinary) === true) {
      bingoGame.gameCoverAll = true;
      player.playerCoverAll = true;
    }
    console.log('game coverall ' + bingoGame.gameCoverAll);
    bingoGame.players.push(player);
    
  }
  // return bingoGame;
  if(bingoGame.gameCoverAll === true){
    console.log(bingoGame);
  }
  
}

newBingoGame();


