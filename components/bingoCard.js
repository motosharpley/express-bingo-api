const bingoCard = {};
const { getRandomNumber } = require('./RNG');

let usedCardNums = new Array(75);
bingoCard.currentCardArray = new Array();

function getNewNum() {
  return getRandomNumber(1, 15);
}

bingoCard.anotherCard = function () {
  bingoCard.currentCardArray = [];
  usedCardNums = new Array(75).fill(false);

  bingoCard.newCard();
  // console.log(usedCardNums);
  return false;
};

bingoCard.newCard = function () {
  for (let i = 0; i < 25; i++) {
    setSquare(i);
  }
};

function setSquare(thisSquare) {
  // let colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4); // Row format
  let colPlace = new Array(
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4
  ); // Column format

  let colBasis = colPlace[thisSquare] * 15;
  let newNum; // = colBasis + getNewNum();

  do {
    newNum = colBasis + getNewNum();
  } while (usedCardNums[newNum]);

  usedCardNums[newNum] = true;
  return bingoCard.currentCardArray.push(newNum);
}

module.exports = bingoCard;
