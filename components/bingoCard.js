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

/**
 * Sets a square on the bingo card with a unique number.
 *
 * @param {number} thisSquare - The index of the square to set on the bingo card.
 * @returns {number} The new length of the `bingoCard.currentCardArray` after adding the number.
 *
 * @description
 * This function calculates a unique number for a bingo card square based on its column.
 * It ensures that the number is not already used by checking the `usedCardNums` array.
 * The column is determined using the `colPlace` array, and the number is generated
 * within the range of the column's basis (multiples of 15).
 *
 * @example
 * // Assuming `usedCardNums` and `bingoCard.currentCardArray` are properly initialized:
 * setSquare(0); // Sets the first square with a unique number.
 */
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
  let newNum;

  do {
    newNum = colBasis + getNewNum();
  } while (usedCardNums[newNum]);

  usedCardNums[newNum] = true;
  return bingoCard.currentCardArray.push(newNum);
}

module.exports = bingoCard;
