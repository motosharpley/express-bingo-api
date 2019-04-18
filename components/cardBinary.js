const bingoCard = require('./bingoCard');
const ballDraw = require('./ballDraw');

const playerCard = bingoCard.currentCardArray;
bingoCard.newCard();
const interimDraw = ballDraw.allBallsDrawn;
ballDraw.interimGameDraw();

let cardBinary = new Array;

function cardPatternBinary(currentCardArray, interimBallDraw) {
  
  playerCard.forEach(square => {
    if(interimDraw.includes(square)) {
      cardBinary.push(1);
    } else {
      cardBinary.push(0);
    }
  });
  
  return cardBinary;
}

cardPatternBinary(playerCard, interimDraw);
console.log(cardBinary);
setTimeout(() => {
  console.log(interimDraw.sort());
  console.log(playerCard);
}, 1000);

