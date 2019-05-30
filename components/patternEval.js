// const bingoCard = require('./bingoCard');
// const ballDraw = require('./ballDraw');

// const allBallsDrawn = ballDraw.allBallsDrawn;
// ballDraw.drawAllBalls();
// Evaluate daubbed player card and determine winning interim prize pattern

// let playerCard = cardBinary;

const patternEval = {}

// ******** Check player card for interim prize wins ********
// For Each winning pattern check if playerCard contains winnning pattern
// Build array of matched winning patterns
// return highest ranking pattern/prize amount & bonusType

patternEval.matchedPatterns = []; // @TODO convert to playResult object
// let playResult = {
//   patternMatched: pattern,
//   prizeWon: winAmount,
//   bonusType: bonusType
// };

patternEval.checkWinPattern = function (cardBinary, patternsArr) {
  // console.log('checking interim wins');
  let match = false;
  patternsArr.forEach(pattern => {
    patternBinary = pattern;

    for (i = 0; i < cardBinary.length; i++) {
      // console.log('card ' + cardBinary[i]);
      // console.log('patt ' + patternBinary[i]);
      // console.log(cardBinary[i] >= patternBinary[i]);
      if (cardBinary[i] >= patternBinary[i]) {
        match = true;
      } else {
        match = false;
        break;
      }
    }
    if (match === true) {
      patternEval.matchedPatterns.push(patternBinary);
      console.log('match ' + match);
    } else {
      return match = false;
    }
    
  });
}

// ****** dummy patterns for testing ******
patternEval.winningPatterns = [
  [0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0],
  [0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1],
  [0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0],
  [0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0],
  [1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
  [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0]
];

let cardpattern = [0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0];
// patternEval.checkWinPattern(cardpattern,winningPatterns);
// console.log('matched patterns: ' + matchedPatterns);


//  ***** get draw array for coverall comparison by card index *****
patternEval.drawArray = new Array;

patternEval.getDrawIndex = function(cardIndex, allBallsDrawn){
  for(i=0; i<cardIndex; i++) {
    patternEval.drawArray.push(allBallsDrawn[i]);
  }
}
// getDrawIndex(25, allBallsDrawn);
// console.log(patternEval.drawArray);


// ******* example get player card binary and reduce() *********
// cardPatternBinary(playerCard, drawArray);
// let playedCardBinary = cardBinary.currentCardBinary.reduce((accumulator, currentValue) => accumulator + currentValue );

// ********* Check playerCard for cover all condition **********
patternEval.checkCoverall = function(playedCardBinary){
  playedCardBinary = playedCardBinary.reduce((accumulator, currentValue) => accumulator + currentValue );
  if(playedCardBinary === 25) {
    console.log('Congrats you got a coverall');
    return true;
  } else {
    return false;
  }
}

module.exports = patternEval;