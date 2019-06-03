// ****** IMPORTS FOR TESTING ONLY *******

// const bingoCard = require('./bingoCard');
// const ballDraw = require('./ballDraw');

// const playerCard = bingoCard.currentCardArray;
// bingoCard.newCard();
// const interimDraw = ballDraw.interimGameDraw;
// const allBallsDrawn = ballDraw.allBallsDrawn;
// ballDraw.drawAllBalls();

// ******* END TESTING IMPORTS *******

const cardBinary = {};

cardBinary.currentCardBinary = new Array;

cardBinary.cardPatternBinary = function(currentCardArray, BallDraw) {
  cardBinary.currentCardBinary = [];
  currentCardArray.forEach(square => {
    if(BallDraw.includes(square)) {
      cardBinary.currentCardBinary.push(1);
    } else {
      cardBinary.currentCardBinary.push(0);
    }
  });  
  return cardBinary.currentCardBinary;
}

module.exports = cardBinary;


// Test logs
// cardPatternBinary(playerCard, interimDraw);
// cardPatternBinary(playerCard, allBallsDrawn);
// console.log('interimDraw: ' + cardBinary);
// console.log('allBallsDrawn: ' + cardBinary.reduce((accumulator, currentValue) => accumulator + currentValue ));
// console.log(interimDraw.sort());
// console.log(playerCard);
