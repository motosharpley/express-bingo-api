let usedCardNums = new Array(75);
let currentCardArray = new Array();

function getNewNum() {
  return Math.floor((Math.random() * 15) + 1)
}

function anotherCard() {
  for (var i = 0; i < usedCardNums.length; i++) {
    usedCardNums[i] = false;
  };

  newCard();
  return false;
}

function newCard() {
  for(var i=0 ; i<25 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  // let colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4); // Row format
  let colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4); // Coloumn format

  let colBasis = colPlace[thisSquare] * 15;
  let newNum = colBasis + getNewNum();


  do{
    newNum = colBasis + getNewNum();
  }while(usedCardNums[newNum]);
  
  usedCardNums[newNum] = true;
  return currentCardArray.push(newNum);  
}

// newCard();
// anotherCard();
console.log(currentCardArray);
console.log(currentCardArray.length);
console.log(usedCardNums);
