const bingoCard = require('./bingoCard');
const ballDraw = require('./ballDraw');

const allBallsDrawn = ballDraw.allBallsDrawn;
ballDraw.drawAllBalls();
// Evaluate daubbed player card and determine winning interim prize pattern

// let playerCard = cardBinary;

const winningPatterns = [];

// For Each winning pattern check if playerCard contains winnning pattern
// Build array of matched winning patterns
// return highest ranking pattern/prize amount & bonusType

// let matchedPatterns = [];
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

getDrawIndex(5, allBallsDrawn);

console.log(drawArray);

// cardPatternBinary(playerCard, drawArray);
let playedCardBinary = cardBinary.reduce((accumulator, currentValue) => accumulator + currentValue ));
function checkCoverall(playedCardBinary){
  if(playedCardBinary === 25) {
    console.log('Congrats you got a coverall');
    return true;
  } else {
    return false;
    // drawNextPlayerCard();
  }
}
