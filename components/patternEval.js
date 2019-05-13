// const bingoCard = require('./bingoCard');
// const ballDraw = require('./ballDraw');

// const allBallsDrawn = ballDraw.allBallsDrawn;
// ballDraw.drawAllBalls();
// Evaluate daubbed player card and determine winning interim prize pattern

// let playerCard = cardBinary;

const patternEval = {}

const winningPatterns = [];

// For Each winning pattern check if playerCard contains winnning pattern
// Build array of matched winning patterns
// return highest ranking pattern/prize amount & bonusType

function checkWinPattern(cardBinary, patternBinary) {
  let matchedPatterns = [];
  for(i=0; i<cardBinary.length; i++) {
    if(cardBinary[i] >= patternBinary[i]){
      i++;
      match = true;
    } else {
      return match = false;
    }
  } 
  if(match === true) {
    matchedPatterns.push(patternBinary);
  }
}


// let playResult = {
//   patternMatched: pattern,
//   prizeWon: winAmount,
//   bonusType: bonusType
// };


// Check playerCard for cover all condition

let drawArray = new Array;

function getDrawIndex(cardIndex, allBallsDrawn){
  for(i=0; i<cardIndex; i++) {
    drawArray.push(allBallsDrawn[i]);
  }
}

// getDrawIndex(5, allBallsDrawn);

// console.log(drawArray);

// cardPatternBinary(playerCard, drawArray);
// let playedCardBinary = cardBinary.reduce((accumulator, currentValue) => accumulator + currentValue );

patternEval.checkCoverall = function(playedCardBinary){
  if(playedCardBinary === 25) {
    // console.log('Congrats you got a coverall');
    return true;
  } else {
    return false;
  }
}

module.exports = patternEval;