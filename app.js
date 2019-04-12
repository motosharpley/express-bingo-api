const express = require('express');
const ballDraw = require('./components/ballDraw')

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
