// Import modules
const bingoCard = require("./bingoCard");
const ballDraw = require("./ballDraw");
const cardBinary = require("./cardBinary");
const patternEval = require("./patternEval");

const gameQueue = {};
let gameIndex = 1;
// ********* Build Game ***********
gameQueue.games = [];

gameQueue.newBingoGame = function () {
  // Draw All Balls
  let allBallsDrawn = ballDraw.allBallsDrawn;
  ballDraw.drawAllBalls();
  // Interim Game Draw
  let interimDraw = ballDraw.interimGameDraw;
  // Initialize new game & build queue
  // console.log(interimDraw[0]);
  // new change

  let newGame = {
    allBallsDrawn: allBallsDrawn,
    interimDraw: interimDraw,
    gameId: gameIndex,
    gameCoverAll: false,
    players: [],
  };

  let cardIndex = 25;
  while (newGame.gameCoverAll === false) {
    // generate player card
    // bingoCard.currentCardArray = []; Moved this into anotherCard() function
    bingoCard.anotherCard();
    let playerCard = bingoCard.currentCardArray;
    // console.log('player card: ' + playerCard);

    // Check interim prize win
    // console.log('checking interim prize')
    // cardBinary.currentCardBinary = []; moved to cardPatternBinary
    cardBinary.cardPatternBinary(playerCard, interimDraw);
    let interimCardBinary = cardBinary.currentCardBinary;
    // console.log(interimDraw);
    // console.log(' interimCard: ' + interimCardBinary);

    // patternEval.matchedPatterns = []; moved to checkWinPattern function
    patternEval.checkWinPattern(interimCardBinary, patternEval.winningPatterns);
    // cardBinary.currentCardBinary = []; moved to cardPatternBinary
    // Check card for coverall == if no coverall get next card and add to game
    // if coverall end game
    // console.log('checking coverall');

    patternEval.drawArray = [];
    patternEval.getDrawIndex(cardIndex, allBallsDrawn);
    let currentDrawArray = patternEval.drawArray;
    // console.log(currentDrawArray.length);
    // console.log('currentDrawArray: ' + currentDrawArray);
    cardIndex++;
    // console.log('cardIndex' + cardIndex);
    let matchedPatterns = patternEval.matchedPatterns;

    let player = {
      playerCard: playerCard,
      currentDrawArray: currentDrawArray,
      patternWon: matchedPatterns, //patternEval.playResult.patternMatched
      prizeWon: 0, //patternEval.playResult.prizeWon
      bonusType: 0, //patternEval.playResult.bonusType
      bonusWon: 1,
      playerCoverAll: false,
      // @TODO bonus play object???
      // bonusPlay: {
      //   playerCard: bonusPlayerCard,
      //   patternWon: matchedPatterns, //patternEval.playResult.patternMatched
      //   prizeWon: 0, //patternEval.playResult.prizeWon
      //   bonusType: 0, //patternEval.playResult.bonusType
      //   bonusWon: 0,
      // }
    };

    cardBinary.cardPatternBinary(playerCard, currentDrawArray);
    let playedCardBinary = cardBinary.currentCardBinary;
    // console.log('coverallCardBinary: ' + playedCardBinary);
    if (patternEval.checkCoverall(playedCardBinary) === true) {
      newGame.gameCoverAll = true;
      player.playerCoverAll = true;
    }
    // console.log('game coverall ' + newGame.gameCoverAll);

    // ******* Bonus Play Handler ***********
    // @TODO if player.bonusWon > 0 trigger bonus play request
    if (player.bonusWon > 0) {
      bingoCard.anotherCard();
      let bonusPlayerCard = bingoCard.currentCardArray;
      let bonusPattern = [];
      let bonusPlay = {
        playerCard: bonusPlayerCard,
        // bonusPatternWon: bonusPattern, //patternEval.playResult.patternMatched
        prizeWon: 0, //patternEval.playResult.prizeWon
        bonusType: 0, //patternEval.playResult.bonusType
        bonusWon: 0,
      };

      // Get new binary for bonus card
      cardBinary.cardPatternBinary(bonusPlayerCard, interimDraw);
      let bonusCardBinary = cardBinary.currentCardBinary;
      // console.log(`bonuscardbinary: ${bonusCardBinary}`);
      // check bonus card against bonus prize table
      patternEval.checkWinPattern(bonusCardBinary, patternEval.winningPatterns);
      bonusPlay.bonusPattern = patternEval.matchedPatterns;
      // console.log(`bonusPattern: ${bonusPattern}`);
      player.bonusPlay = bonusPlay;
    } else {
      player.bonusPlay = null;
      bonusPlayerCard = null;
    }
    newGame.players.push(player);

    // ******* End Bonus Play Handler ***********
  }
  // return bingoGame;
  if (newGame.gameCoverAll === true) {
    gameQueue.games.push(newGame);
    ballDraw.allBallsDrawn = [];
    ballDraw.interimGameDraw = [];
    gameIndex++;
    if (gameIndex < 6) {
      gameQueue.newBingoGame();
    }
  }
};

module.exports = gameQueue;
// gameQueue.newBingoGame();
// console.log(gameQueue.games);
