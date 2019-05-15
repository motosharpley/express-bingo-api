// const bingoCard = require('./bingoCard');
// const ballDraw = require('./ballDraw');

// const allBallsDrawn = ballDraw.allBallsDrawn;
// ballDraw.drawAllBalls();
// Evaluate daubbed player card and determine winning interim prize pattern

// let playerCard = cardBinary;

const patternEval = {}

const winningPatterns = [
  [0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0],
  [0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1],
  [0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0],
  [0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0]
];

// For Each winning pattern check if playerCard contains winnning pattern
// Build array of matched winning patterns
// return highest ranking pattern/prize amount & bonusType
let matchedPatterns = [];
patternEval.checkWinPattern = function (cardBinary, patternBinary) {
  let match = false;
  winningPatterns.forEach(pattern => {
    patternBinary = pattern;

    for (i = 0; i < cardBinary.length; i++) {
      console.log('card ' + cardBinary[i]);
      console.log('patt ' + patternBinary[i]);
      console.log(cardBinary[i] >= patternBinary[i]);
      if (cardBinary[i] >= patternBinary[i]) {
        match = true;
      } else {
        match = false;
        break;
      }
    }
    if (match === true) {
      matchedPatterns.push(patternBinary);
    } else {
      return match = false;
    }
    console.log('match ' + match);
  });
}

let cardpattern = [0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0];
let pattern = [0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0];

patternEval.checkWinPattern(cardpattern,winningPatterns);
console.log(matchedPatterns);
// let playResult = {
//   patternMatched: pattern,
//   prizeWon: winAmount,
//   bonusType: bonusType
// };


// Check playerCard for cover all condition

patternEval.drawArray = new Array;

patternEval.getDrawIndex = function(cardIndex, allBallsDrawn){
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