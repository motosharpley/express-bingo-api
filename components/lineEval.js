const reelStop = require('./reelStop');

const lineEval = {};

// example line 1
// 000
// 111
// 000
// binary as array = [0,1,0,0,1,0,0,1,0] --column wise representation
const lines = [
    ["line_1", [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]],
    ["line_2", [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]],
    ["line_3", [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]],
    ["line_4", [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0]],
    ["line_5", [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]],
    ["line_6", [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]],
    ["line_7", [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0]],
    ["line_8", [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0]],
    ["line_9", [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0]],
    ["line_10", [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0]],
    ["line_11", [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1]],
    ["line_12", [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0]],
    ["line_13", [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0]],
    ["line_14", [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0]],
    ["line_15", [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1]],
    ["line_16", [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0]],
    ["line_17", [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0]],
    ["line_18", [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0]],
    ["line_19", [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1]],
    ["line_20", [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0]],
    ["line_21", [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1]],
    ["line_22", [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0]],
    ["line_23", [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0]],
    ["line_24", [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0]],
    ["line_25", [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1]]
]

const reelStrip_1 = [1, 6, 4, 6, 11, 4, 6, 1, 6, 4, 4, 4, 4, 4, 6, 7, 12, 4, 6, 3, 3, 3, 3, 3, 7, 8, 7, 4, 4, 4, 4, 4, 4, 6, 1, 6, 11, 4, 7, 1, 6, 4, 6, 7, 4, 6, 2, 6, 12, 6, 5, 5, 5, 5, 5, 5, 6, 8, 4, 8, 6, 8, 6, 8, 1, 6, 4, 6, 11, 4, 6, 1, 6, 8, 6, 7, 4, 6, 3, 6, 12, 8, 6, 8, 2, 2, 2, 2, 2, 8, 4, 8, 4, 8, 4, 8, 1, 11, 2, 3, 12, 4, 5, 11, 6, 7, 12, 8];
const reelStrip_2 = [1, 7, 5, 3, 11, 8, 7, 1, 7, 3, 3, 3, 3, 3, 3, 5, 12, 6, 4, 4, 4, 7, 5, 7, 5, 5, 5, 5, 5, 6, 5, 7, 1, 6, 7, 3, 11, 7, 3, 1, 8, 5, 5, 5, 5, 5, 7, 5, 12, 7, 5, 6, 3, 7, 3, 3, 3, 3, 3, 3, 7, 6, 5, 7, 1, 5, 2, 8, 11, 7, 8, 1, 7, 8, 3, 3, 3, 3, 3, 7, 12, 7, 5, 6, 2, 2, 2, 2, 2, 8, 5, 5, 5, 5, 5, 7, 1, 11, 2, 3, 12, 4, 5, 11, 6, 7, 12, 8];
const reelStrip_3 = [1, 7, 8, 7, 11, 2, 8, 1, 6, 3, 3, 3, 3, 3, 3, 6, 12, 8, 5, 7, 3, 8, 4, 7, 2, 2, 2, 2, 2, 7, 3, 8, 1, 7, 8, 7, 11, 3, 8, 1, 3, 8, 4, 4, 4, 4, 7, 6, 12, 7, 8, 2, 8, 2, 4, 7, 2, 2, 2, 2, 2, 7, 3, 8, 1, 7, 8, 7, 11, 6, 7, 1, 6, 8, 5, 5, 5, 5, 5, 6, 12, 7, 8, 7, 2, 2, 2, 2, 2, 8, 3, 8, 7, 8, 7, 8, 1, 11, 2, 3, 12, 4, 5, 11, 6, 7, 12, 8];
const reelStrip_4 = [1, 6, 7, 6, 11, 8, 7, 1, 7, 3, 3, 3, 3, 3, 6, 8, 12, 7, 6, 7, 4, 4, 4, 4, 4, 8, 2, 8, 7, 8, 2, 8, 2, 6, 7, 6, 11, 4, 7, 1, 8, 4, 4, 4, 4, 4, 4, 6, 12, 8, 6, 7, 2, 8, 4, 7, 5, 5, 5, 5, 6, 8, 4, 8, 1, 6, 7, 6, 11, 4, 8, 2, 8, 3, 6, 8, 4, 6, 7, 6, 12, 7, 6, 7, 2, 2, 2, 2, 2, 8, 4, 8, 7, 8, 4, 8, 1, 11, 2, 3, 12, 4, 5, 11, 6, 7, 12, 8];
const reelStrip_5 = [1, 7, 6, 7, 11, 8, 7, 6, 7, 4, 6, 8, 5, 6, 7, 6, 12, 4, 6, 7, 5, 5, 5, 5, 5, 8, 5, 8, 7, 8, 6, 8, 1, 7, 6, 7, 11, 6, 8, 6, 3, 3, 3, 3, 3, 6, 7, 6, 12, 6, 7, 6, 5, 8, 5, 5, 5, 5, 5, 8, 7, 8, 2, 8, 1, 8, 6, 7, 11, 6, 7, 3, 8, 4, 4, 4, 4, 4, 7, 6, 12, 8, 6, 7, 2, 2, 2, 2, 2, 8, 5, 8, 7, 8, 7, 8, 1, 11, 2, 3, 12, 4, 5, 11, 6, 7, 12, 8];


const symbols = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12];
const numScatters = 2;
let scatterSymbols = [11, 12];

// ******* Begin Reel Stop & Reel Results  *******

let reelResults = [];
let reelStops = [];

// TODO set number of reels and length of results dynamically
lineEval.setReelResults = function () {
    // get reel stops
    // call rng and get number within range of reel strip length
    reelStops = reelStop.getReelStopArray(0, reelStrip_1.length-4, 5);
    console.log(reelStops);
    // set top line with symbols at index of rng result
    // for each column increment rng result and get symbol from reel strip at index of rng ++
    // reel 1
    reelResults.push(reelStrip_1[reelStops[0]]);
    reelResults.push(reelStrip_1[reelStops[0] + 1]);
    reelResults.push(reelStrip_1[reelStops[0] + 2]);
    // reel 2
    reelResults.push(reelStrip_2[reelStops[1]]);
    reelResults.push(reelStrip_2[reelStops[1] + 1]);
    reelResults.push(reelStrip_2[reelStops[1] + 2]);
    // reel 3
    reelResults.push(reelStrip_3[reelStops[2]]);
    reelResults.push(reelStrip_3[reelStops[2] + 1]);
    reelResults.push(reelStrip_3[reelStops[2] + 2]);
    // reel 4
    reelResults.push(reelStrip_4[reelStops[3]]);
    reelResults.push(reelStrip_4[reelStops[3] + 1]);
    reelResults.push(reelStrip_4[reelStops[3] + 2]);
    // reel 5
    reelResults.push(reelStrip_5[reelStops[4]]);
    reelResults.push(reelStrip_5[reelStops[4] + 1]);
    reelResults.push(reelStrip_5[reelStops[4] + 2]);

    // console.log("Reel Results: " + reelResults);
};
// ******* End Reel Stop & Reel Results *******


let line_win = 0;
lineEval.spinResults = [];

lineEval.checkLineWins = function () {
    reelResults = [];
    reelStops = [];
    lineEval.spinResults = [];
    lineEval.setReelResults();
    lineEval.spinResults.push(reelResults);
    let lineResults = [];
    // TODO symbols.length - number of scatters
    for (let i = 0; i < symbols.length - numScatters; i++) {
        // console.log("current symbol = " + symbols[i]);
        for (let l = 0; l < lines.length; l++) {
            // console.log("current line = " + lines[l][0]);
            // loop through each index of the current line and count how many of the current symbol or wild symbol are on that line continuously from left to right
            for (let x = 0; x < lines[l][1].length; x++) {
                // if there is a break in the symbols in line from left to right exit the loop
                // the below logic also checks for wild -- the wild symbol must be 1st in the array -- multiple wilds will require addtional logic
                if ((lines[l][1][x] == 1) && !((reelResults[x] == symbols[i]) || (reelResults[x] == symbols[0]))) {
                    break;
                }
                else if ((lines[l][1][x] == 1) && ((reelResults[x] == symbols[i]) || (reelResults[x] == symbols[0]))) {
                    // console.log("line num = " + lines[l][1][x]);
                    // console.log("reel results = " + reelResults[x]);
                    line_win++;
                    lineResults.push(reelResults[x])
                }
            }// ******* end of evaluation loop *******
            // this is a sanity check to prevent false positives on lines which contain wilds but don't have the current symbol present
            if (!lineResults.includes(symbols[i])) {
                line_win = 0
            }
            if (line_win > 1) {
                // console.log(lines[l][0] + " had " + line_win + " hits of symbol: " + symbols[i]);
                lineEval.spinResults.push(["symbol",symbols[i], lines[l][0],"hit_count", line_win])
            }
            line_win = 0;
            // reset lineResults to prevent false positive from previous lines
            lineResults = [];
        }// ******* end of next line loop *******
    }// ******* end of next symbol loop *******
    lineEval.checkScatters();

    console.log("Spin Results -->")
    console.log(lineEval.spinResults);
}


// Scatters count in any position so no line check is required just total up how many there are
lineEval.checkScatters = function () {
    let scatterCount = 0;
    // Check each scatter symbol
    for (j = 0; j < scatterSymbols.length; j++) {
        // reset scatter count when checking the next symbol
        scatterCount = 0;
        // loop through the reel results and count how many times the scatter symbol occurs
        for (i = 0; i < reelResults.length; i++) {
            if (reelResults[i] == scatterSymbols[j]) {
                scatterCount++;
            }
        }
        lineEval.spinResults.push(["scatter_symbol", scatterSymbols[j],scatterCount]);
        // console.log("scatter Count: " + scatterCount + " scatter symbol: " + scatterSymbols[j]);
    }
}

// lineEval.setReelResults();
lineEval.checkLineWins();
// lineEval.checkScatters();


module.exports = lineEval;