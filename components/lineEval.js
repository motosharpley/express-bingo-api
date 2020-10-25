const reelStop = require('./reelStop');
const RNG = require('./RNG');
const data = require('./data');

const lineEval = {};

// example line 1
// 000
// 111
// 000
// binary as array = [0,1,0,0,1,0,0,1,0] --column wise representation
const lines = [
  ['line_1', [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]],
  ['line_2', [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]],
  ['line_3', [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]],
  ['line_4', [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0]],
  ['line_5', [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]],
  ['line_6', [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]],
  ['line_7', [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0]],
  ['line_8', [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0]],
  ['line_9', [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0]],
  ['line_10', [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0]],
  ['line_11', [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1]],
  ['line_12', [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0]],
  ['line_13', [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0]],
  ['line_14', [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0]],
  ['line_15', [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1]],
  ['line_16', [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0]],
  ['line_17', [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0]],
  ['line_18', [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0]],
  ['line_19', [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1]],
  ['line_20', [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0]],
  ['line_21', [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1]],
  ['line_22', [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0]],
  ['line_23', [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0]],
  ['line_24', [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0]],
  ['line_25', [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]],
];

const W_01 = 1;
const S_02 = 2;
const S_03 = 3;
const S_04 = 4;
const S_05 = 5;
const S_06 = 6;
const S_07 = 7;
const S_08 = 8;
const SC_1 = 9;

const symbols = [W_01, S_02, S_03, S_04, S_05, S_06, S_07, S_08, SC_1];
const numScatters = 1;
let scatterSymbols = [SC_1];

let line_win = 0;
lineEval.isBonus = false;

lineEval.checkLineWins = function (reels) {
  data.spinResults = [];
  reelStop.dynamicSetReelResults(reels);
  data.spinResults.push(data.reelStops);
  data.spinResults.push(data.reelResults);
  let lineResults = [];
  for (let i = 0; i < symbols.length - numScatters; i++) {
    for (let l = 0; l < lines.length; l++) {
      // loop through each index of the current line and count how many of the current symbol or wild symbol are on that line continuously from left to right
      for (let x = 0; x < lines[l][1].length; x++) {
        // if there is a break in the symbols in line from left to right exit the loop
        // the below logic also checks for wild -- the wild symbol must be 1st in the symbols definition array -- multiple wilds will require addtional logic
        if (
          lines[l][1][x] == 1 &&
          !(
            data.reelResults[x] == symbols[i] ||
            data.reelResults[x] == symbols[0]
          )
        ) {
          break;
        } else if (
          lines[l][1][x] == 1 &&
          (data.reelResults[x] == symbols[i] ||
            data.reelResults[x] == symbols[0])
        ) {
          line_win++;
          lineResults.push(data.reelResults[x]);
        }
      } // ******* end of evaluation loop *******
      // this is a sanity check to prevent false positives on lines which contain wilds but don't have the current symbol present
      if (!lineResults.includes(symbols[i])) {
        line_win = 0;
      }
      if (line_win > 1) {
        data.spinResults.push([
          'symbol',
          symbols[i],
          lines[l][0],
          'hit_count',
          line_win,
        ]);
      }
      line_win = 0;
      // reset lineResults to prevent false positive from previous lines
      lineResults = [];
    } // ******* end of next line loop *******
  } // ******* end of next symbol loop *******
  lineEval.checkScatters();
};

// Scatters count in any position so no line check is required just total up how many there are
// TODO handle scatter hits for Freespin and bonus triggers
lineEval.checkScatters = function () {
  let scatterCount = 0;
  // Check each scatter symbol
  for (j = 0; j < scatterSymbols.length; j++) {
    // reset scatter count when checking the next symbol
    scatterCount = 0;
    // loop through the reel results and count how many times the scatter symbol occurs
    for (i = 0; i < data.reelResults.length; i++) {
      if (data.reelResults[i] == scatterSymbols[j]) {
        scatterCount++;
      }
    }
    data.spinResults.push([
      'scatter_symbol',
      scatterSymbols[j],
      'hit_count',
      scatterCount,
    ]);
    if (scatterCount > 2) {
      lineEval.isBonus = true;
      lineEval.handleScatters(scatterCount);
    }
  }
};

lineEval.numSpins;
lineEval.multiplier;
lineEval.entryAward;

lineEval.handleScatters = function (scatterCount) {
  let spinWeight = RNG.getRandomNumber(1, 100);
  let multiplierWeight = RNG.getRandomNumber(1, 100);
  let entryAwardWeight = RNG.getRandomNumber(1, 100);
  switch (scatterCount) {
    case 3:
      console.log(
        '3 scatter bonus |spinWeight|' +
          spinWeight +
          ' |multiplierWeight|' +
          multiplierWeight +
          '|entryAwardWeight|' +
          entryAwardWeight
      );
      // *********** 3 scatter weight table range = 100 ************
      // spins  wt      multiplier  wt    entry-award   wt
      // 10     18         2        40       1          50
      // 11     23         3        39       2          41
      // 12     22         4        19       3          5
      // 13     22         5        2        4          2
      // 14     10                           5          2
      // 15     5

      // ******** Set Number of freespins ***********
      if (spinWeight >= 83) lineEval.numSpins = 10;
      else if (spinWeight >= 60 && spinWeight < 83) lineEval.numSpins = 11;
      else if (spinWeight >= 38 && spinWeight < 60) lineEval.numSpins = 12;
      else if (spinWeight >= 16 && spinWeight < 38) lineEval.numSpins = 13;
      else if (spinWeight >= 6 && spinWeight < 16) lineEval.numSpins = 14;
      else if (spinWeight >= 1 && spinWeight < 6) lineEval.numSpins = 15;
      // ******** Set Multiplier **************
      if (multiplierWeight >= 61) lineEval.multiplier = 2;
      else if (multiplierWeight >= 22 && multiplierWeight < 61)
        lineEval.multiplier = 3;
      else if (multiplierWeight >= 3 && multiplierWeight < 22)
        lineEval.multiplier = 4;
      else if (multiplierWeight >= 1 && multiplierWeight < 3)
        lineEval.multiplier = 5;
      // ******** Set Entry Award *************
      if (entryAwardWeight >= 51) lineEval.entryAward = 1;
      else if (entryAwardWeight >= 10 && entryAwardWeight < 51)
        lineEval.entryAward = 2;
      else if (entryAwardWeight >= 5 && entryAwardWeight < 10)
        lineEval.entryAward = 3;
      else if (entryAwardWeight >= 3 && entryAwardWeight < 5)
        lineEval.entryAward = 4;
      else if (entryAwardWeight >= 1 && entryAwardWeight < 3)
        lineEval.entryAward = 5;
      console.log(
        '|freespins|' +
          lineEval.numSpins +
          ' |multiplier|' +
          lineEval.multiplier +
          '|entryAward|' +
          lineEval.entryAward
      );
      break;
    case 4:
      console.log('4scatters');

      // *********** 4 scatter weight table range = 100 ************
      // spins  wt      multiplier  wt    entry-award   wt
      // 10     10         2        30       5          40
      // 11     20         3        30       10         30
      // 12     20         4        38       15         15
      // 13     20         5        2        20         15
      // 15     20                           25          0
      // 20     10
      // ******** Set Number of freespins ***********
      if (spinWeight >= 91) lineEval.numSpins = 10;
      else if (spinWeight >= 71 && spinWeight < 91) lineEval.numSpins = 11;
      else if (spinWeight >= 51 && spinWeight < 71) lineEval.numSpins = 12;
      else if (spinWeight >= 31 && spinWeight < 51) lineEval.numSpins = 13;
      else if (spinWeight >= 11 && spinWeight < 31) lineEval.numSpins = 15;
      else if (spinWeight >= 1 && spinWeight < 11) lineEval.numSpins = 20;
      // ******** Set Multiplier **************
      if (multiplierWeight >= 71) lineEval.multiplier = 2;
      else if (multiplierWeight >= 41 && multiplierWeight < 71)
        lineEval.multiplier = 3;
      else if (multiplierWeight >= 3 && multiplierWeight < 41)
        lineEval.multiplier = 4;
      else if (multiplierWeight >= 1 && multiplierWeight < 3)
        lineEval.multiplier = 5;
      // ******** Set Entry Award *************
      if (entryAwardWeight >= 61) lineEval.entryAward = 5;
      else if (entryAwardWeight >= 31 && entryAwardWeight < 61)
        lineEval.entryAward = 10;
      else if (entryAwardWeight >= 16 && entryAwardWeight < 31)
        lineEval.entryAward = 15;
      else if (entryAwardWeight >= 1 && entryAwardWeight < 16)
        lineEval.entryAward = 20;
      console.log(
        '|freespins|' +
          lineEval.numSpins +
          ' |multiplier|' +
          lineEval.multiplier +
          '|entryAward|' +
          lineEval.entryAward
      );
      break;
    case 5:
      console.log('5scatters');

      // *********** 5 scatter weight table range = 100 ************
      // spins  wt      multiplier  wt    entry-award   wt
      // 15     20         2        20       5          5
      // 16     20         3        29       10         25
      // 17     20         4        20       15         20
      // 18     20         5        31       20         20
      // 20     10                           25         25
      // 25     10                           30         5
      // ******** Set Number of freespins ***********
      if (spinWeight >= 81) lineEval.numSpins = 15;
      else if (spinWeight >= 61 && spinWeight < 81) lineEval.numSpins = 16;
      else if (spinWeight >= 41 && spinWeight < 61) lineEval.numSpins = 17;
      else if (spinWeight >= 21 && spinWeight < 41) lineEval.numSpins = 18;
      else if (spinWeight >= 11 && spinWeight < 21) lineEval.numSpins = 20;
      else if (spinWeight >= 1 && spinWeight < 11) lineEval.numSpins = 25;
      // ******** Set Multiplier **************
      if (multiplierWeight >= 81) lineEval.multiplier = 2;
      else if (multiplierWeight >= 52 && multiplierWeight < 81)
        lineEval.multiplier = 3;
      else if (multiplierWeight >= 32 && multiplierWeight < 52)
        lineEval.multiplier = 4;
      else if (multiplierWeight >= 1 && multiplierWeight < 32)
        lineEval.multiplier = 5;
      // ******** Set Entry Award *************
      if (entryAwardWeight >= 96) lineEval.entryAward = 5;
      else if (entryAwardWeight >= 71 && entryAwardWeight < 96)
        lineEval.entryAward = 10;
      else if (entryAwardWeight >= 51 && entryAwardWeight < 71)
        lineEval.entryAward = 15;
      else if (entryAwardWeight >= 31 && entryAwardWeight < 51)
        lineEval.entryAward = 20;
      else if (entryAwardWeight >= 6 && entryAwardWeight < 31)
        lineEval.entryAward = 25;
      else if (entryAwardWeight >= 1 && entryAwardWeight < 6)
        lineEval.entryAward = 30;
      console.log(
        '|freespins|' +
          lineEval.numSpins +
          ' |multiplier|' +
          lineEval.multiplier +
          '|entryAward|' +
          lineEval.entryAward
      );
      break;
  }
  let betLevel = 1;
  let numberLines = 25;
  lineEval.entryAward = betLevel * numberLines * lineEval.entryAward;
  console.log(`multiplied entry: ${lineEval.entryAward}`);
};

lineEval.spinTillYouWin = function (reels) {
  // center symbol sticks wild and respins until prize is won
  let isWildtrue;
  if (reelResults[7] == wild) {
    isWildtrue = true;
  } else {
    isWildtrue = false;
  }

  while (isWildtrue) {
    while (lineEval.spinResults.indexOf('win_total') + 1 <= 0) {
      reelResults[7] == wild;
      lineEval.checkLineWins(reels); // TODO handle overwriting center wild in reelResults during check line wins
    }
  }
};

module.exports = lineEval;
