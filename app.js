const express = require('express');
const ballDraw = require('./components/ballDraw');
const bingoCard = require('./components/bingoCard');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('hello bingo');
});

app.get('/ball-draw', (req, res) => {
  ballDraw.drawAllBalls();
  res.send(ballDraw.allBallsDrawn);
});

app.get('/bingo-card', (req, res) => {
  bingoCard.newCard();
  res.send(bingoCard.currentCardArray);
});