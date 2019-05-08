const bingoCard = require('./bingoCard');
const ballDraw = require('./ballDraw');

const playerCard = bingoCard.currentCardArray;
bingoCard.newCard();
const interimDraw = ballDraw.interimGameDraw;
const allBallsDrawn = ballDraw.allBallsDrawn;
ballDraw.drawAllBalls();

let cardBinary = new Array;

function cardPatternBinary(currentCardArray, BallDraw) {
  
  currentCardArray.forEach(square => {
    if(BallDraw.includes(square)) {
      cardBinary.push(1);
    } else {
      cardBinary.push(0);
    }
  });  
  return cardBinary;
}

// Test logs
// cardPatternBinary(playerCard, interimDraw);
cardPatternBinary(playerCard, allBallsDrawn);
// console.log('interimDraw: ' + cardBinary);
console.log('allBallsDrawn: ' + cardBinary.reduce((accumulator, currentValue) => accumulator + currentValue ));
// console.log(interimDraw.sort());
// console.log(playerCard);
