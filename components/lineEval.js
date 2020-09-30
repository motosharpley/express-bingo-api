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

const W_01 = 1;
const S_02 = 2;
const S_03 = 3;
const S_04 = 4;
const S_05 = 5;
const S_06 = 6;
const S_07 = 7;
const S_08 = 8;
const SC_1 = 9;

lineEval.reelStrips = [
    ["reelStrip_1", [S_03, SC_1, S_07, S_05, S_03, S_08, S_03, S_07, S_04, S_07, S_04, S_07, S_05, S_04, W_01, S_05, S_02, S_06, S_04, S_08, S_07, SC_1, S_07, S_02, S_04, S_03, S_07, S_06, S_03, S_06, S_04, S_06, W_01, S_02, S_07, W_01, S_04, S_02, S_06, S_05, S_03, SC_1]],
    ["reelStrip_2", [S_05, S_07, S_02, S_07, S_08, S_07, S_02, S_05, S_08, S_05, S_08, S_05, S_03, S_05, W_01, S_07, S_08, S_02, S_05, SC_1, S_07, S_05, SC_1, S_08, S_06, S_08, S_05, S_08, S_06, W_01, S_07, S_05, S_07, S_02, S_07, S_08, S_04, S_05, S_07, SC_1, S_05, S_07]],
    ["reelStrip_3", [S_03, S_08, S_06, S_02, S_04, S_06, S_04, S_06, S_05, S_06, S_04, S_08, S_07, S_04, S_07, S_08, S_03, S_04, S_08, S_05, S_08, S_03, S_08, S_07, S_08, S_03, S_08, SC_1, S_06, S_04, S_06, S_03, S_06, S_07, W_01, S_06, S_08, S_04, S_08, S_06, S_03, S_08]],
    ["reelStrip_4", [S_07, S_02, S_05, S_02, S_08, S_03, S_02, S_04, S_03, S_04, S_05, S_04, S_03, S_05, S_02, S_05, S_02, S_06, W_01, S_04, S_07, S_02, S_07, S_08, W_01, S_08, S_02, S_08, SC_1, S_06, S_02, S_06, S_03, S_06, S_07, S_03, S_07, S_06, S_03, S_05, S_07, S_02]],
    ["reelStrip_5", [S_05, S_03, S_06, S_04, W_01, S_05, S_07, S_03, S_08, S_07, S_03, S_02, S_05, S_08, S_04, S_02, S_06, S_05, S_03, S_08, S_02, S_06, S_07, S_04, S_05, S_06, S_04, S_08, S_03, SC_1, S_08, S_07, S_05, S_02, S_07, S_04, S_06, S_05, S_04, S_07, S_05, S_03]]
];

lineEval.fsReelStrips = [
    ["fsReelStrip1", [S_07, S_06, W_01, S_08, S_03, S_02, S_07, S_08, S_05, S_02, S_08, S_07, S_06, S_08, S_04, S_06, S_08, S_07, S_02, S_03, S_08, S_06, W_01, S_03, S_07, S_06, S_03, S_08, W_01, S_07, S_06, S_08, S_03, S_07, S_06, S_05, S_08, S_02, S_04, S_03, S_07, S_06]],
    ["fsReelStrip1", [S_03, S_04, S_06, S_08, S_07, S_04, S_06, S_08, W_01, S_07, S_08, S_04, S_06, S_08, S_04, S_05, S_07, S_06, S_08, S_07, S_06, S_08, S_07, S_06, S_08, S_02, S_04, S_08, S_06, S_07, S_08, S_03, S_04, S_08, W_01, S_06, S_05, S_04, S_08, S_06, S_03, S_04]],
    ["fsReelStrip1", [S_07, S_06, S_05, S_07, S_08, S_05, S_04, S_07, W_01, S_05, S_08, S_07, S_04, S_05, W_01, S_07, S_05, S_03, W_01, S_05, S_08, S_07, S_05, S_08, S_07, S_02, S_05, S_04, S_07, S_02, S_06, S_08, S_05, S_04, S_06, S_07, S_08, S_02, S_06, S_05, S_07, S_06]],
    ["fsReelStrip1", [S_05, W_01, S_04, S_03, S_06, S_05, S_02, W_01, S_05, S_08, S_06, S_03, S_02, S_07, S_04, S_06, S_03, S_04, S_05, S_03, S_06, S_04, S_08, S_07, S_05, S_06, S_07, S_05, S_06, S_07, S_08, S_05, S_03, S_07, S_05, S_06, S_07, S_05, S_03, S_07, S_05, W_01]],
    ["fsReelStrip1", [S_02, S_03, S_04, S_02, S_08, S_06, S_04, S_05, S_02, S_08, S_03, S_07, S_03, S_04, S_08, W_01, S_05, S_03, S_04, S_05, S_08, S_02, S_05, S_08, S_02, S_05, S_08, S_06, S_02, S_04, S_08, S_03, S_05, S_08, S_06, S_02, S_07, W_01, S_05, S_04, S_02, S_03]]
];


const symbols = [W_01, S_02, S_03, S_04, S_05, S_06, S_07, S_08, SC_1];
const numScatters = 1;
let scatterSymbols = [SC_1];

// ******* Begin Reel Stop & Reel Results  *******

let reelResults = [];
let reelStops = [];

// TODO set number of reels and length of results dynamically
// TODO check each reelstop for end of reel strip location and loop back to beginning with incremented stops if at end of reel strip
// TODO Handle use of FreeSpin reel strips
lineEval.setReelResults = function () {
    // get reel stops
    // call rng and get number within range of reel strip length
    reelStops = reelStop.getReelStopArray(0, reelStrip_1.length - 4, 5);
    // reelStops = [5, 5, 93, 92, 39];
    // console.log(reelStops);
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

lineEval.dynamicSetReelResults = function (reels) {
    reelResults = [];//clear previous results
    reelStops = [];//clear previous results
    // reelStops = [26,38,26,31,28];
    reelStops = reelStop.getReelStopArray(0, reels);
    for (let i = 0; i < reels.length; i++) {
        reelResults.push(reels[i][1][reelStops[i]]);
        reelResults.push(reels[i][1][reelStops[i] + 1]);
        reelResults.push(reels[i][1][reelStops[i] + 2]);
    }
}

// ******* End Reel Stop & Reel Results *******


let line_win = 0;
// lineEval.spinResults = []; // Spin Results data structure [[0index array contains reel results], [line wins][scatter wins]]
lineEval.isBonus = false;

lineEval.checkLineWins = function (reels) {
    data.spinResults = [];
    // lineEval.setReelResults();
    reelStop.dynamicSetReelResults(reels)
    data.spinResults.push(data.reelStops)
    data.spinResults.push(data.reelResults);
    let lineResults = [];
    // TODO symbols.length - number of scatters
    for (let i = 0; i < symbols.length - numScatters; i++) {
        // console.log("current symbol = " + symbols[i]);
        for (let l = 0; l < lines.length; l++) {
            // console.log("current line = " + lines[l][0]);
            // loop through each index of the current line and count how many of the current symbol or wild symbol are on that line continuously from left to right
            for (let x = 0; x < lines[l][1].length; x++) {
                // if there is a break in the symbols in line from left to right exit the loop
                // the below logic also checks for wild -- the wild symbol must be 1st in the symbols definition array -- multiple wilds will require addtional logic
                if ((lines[l][1][x] == 1) && !((data.reelResults[x] == symbols[i]) || (data.reelResults[x] == symbols[0]))) {
                    break;
                }
                else if ((lines[l][1][x] == 1) && ((data.reelResults[x] == symbols[i]) || (data.reelResults[x] == symbols[0]))) {
                    // console.log("line num = " + lines[l][1][x]);
                    // console.log("reel results = " + data.reelResults[x]);
                    line_win++;
                    lineResults.push(data.reelResults[x])
                }
            }// ******* end of evaluation loop *******
            // this is a sanity check to prevent false positives on lines which contain wilds but don't have the current symbol present
            if (!lineResults.includes(symbols[i])) {
                line_win = 0
            }
            if (line_win > 1) {
                // console.log(lines[l][0] + " had " + line_win + " hits of symbol: " + symbols[i]);
                data.spinResults.push(["symbol", symbols[i], lines[l][0], "hit_count", line_win])
            }
            line_win = 0;
            // reset lineResults to prevent false positive from previous lines
            lineResults = [];
        }// ******* end of next line loop *******
    }// ******* end of next symbol loop *******
    lineEval.checkScatters();

}


// Scatters count in any position so no line check is required just total up how many there are
// TODO handle scatter hits for Freespin and bonus triggers
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
        data.spinResults.push(["scatter_symbol", scatterSymbols[j], "hit_count", scatterCount]);
        // console.log("scatter Count: " + scatterCount + " scatter symbol: " + scatterSymbols[j]);
        if (scatterCount > 2){
            lineEval.isBonus = true;
            lineEval.handleScatters(scatterCount);
        }
    }
}

lineEval.handleScatters = function (scatterCount) {
    let spinWeight = RNG.getRandomNumber(1, 100);
    let numSpins;
    let multiplierWeight = RNG.getRandomNumber(1, 100);;
    let multiplier;
    let entryAwardWeight = RNG.getRandomNumber(1, 100);;
    let entryAward;
    switch (scatterCount) {
        case 3:
            console.log("3 scatter bonus |spinWeight|"+ spinWeight +" |multiplierWeight|" + multiplierWeight + "|entryAwardWeight|" + entryAwardWeight);
            // *********** 3 scatter weight table range = 100 ************
            // spins  wt      multiplier  wt    entry-award   wt
            // 10     18         2        40       1          50
            // 11     23         3        39       2          41  
            // 12     22         4        19       3          5
            // 13     22         5        2        4          2
            // 14     10                           5          2
            // 15     5
            
            // ******** Set Number of freespins ***********
            if (spinWeight >= 83) numSpins = 10;
            else if (spinWeight >= 60 && spinWeight < 83) numSpins = 11;
            else if (spinWeight >= 38 && spinWeight < 60) numSpins = 12;
            else if (spinWeight >= 16 && spinWeight < 38) numSpins = 13;
            else if (spinWeight >= 6 && spinWeight < 16) numSpins = 14;
            else if (spinWeight >= 1 && spinWeight < 6) numSpins = 15;
            // ******** Set Multiplier **************
            if (multiplierWeight >= 61) multiplier = 2;
            else if (multiplierWeight >= 22 && multiplierWeight < 61) multiplier = 3;
            else if (multiplierWeight >= 3 && multiplierWeight < 22) multiplier = 4;
            else if (multiplierWeight >= 1 && multiplierWeight < 3) multiplier = 5;
            // ******** Set Entry Award *************
            if (entryAwardWeight >= 51) entryAward = 1;
            else if (entryAwardWeight >= 10 && entryAwardWeight < 51) entryAward = 2;
            else if (entryAwardWeight >= 5 && entryAwardWeight < 10) entryAward = 3;
            else if (entryAwardWeight >= 3 && entryAwardWeight < 5) entryAward = 4;
            else if (entryAwardWeight >= 1 && entryAwardWeight < 3) entryAward = 5;
            console.log("|freespins|" + numSpins + " |multiplier|" + multiplier + "|entryAward|" + entryAward);
            break;
        case 4:
            console.log("4scatters");

            // *********** 4 scatter weight table range = 100 ************
            // spins  wt      multiplier  wt    entry-award   wt
            // 10     10         2        30       5          40
            // 11     20         3        30       10         30  
            // 12     20         4        38       15         15
            // 13     20         5        2        20         15
            // 15     20                           25          0
            // 20     10

            numSpins = 20;
            multiplier = 2;
            entryAward = 20;
            break;
        case 5:
            console.log("5scatters");

            // *********** 5 scatter weight table range = 100 ************
            // spins  wt      multiplier  wt    entry-award   wt
            // 15     20         2        20       5          5
            // 16     20         3        29       10         25  
            // 17     20         4        20       15         20
            // 18     20         5        31       20         20
            // 20     10                           25         25
            // 25     10

            numSpins = 25;
            multiplier = 2;
            entryAward = 30;
            break;
    }

}


lineEval.spinTillYouWin = function (reels) {
    // center symbol sticks wild and respins until prize is won
    let isWildtrue;
    if (reelResults[7] == wild) {
        isWildtrue = true;
    } else {
        isWildtrue = false;
    }

    while (isWildtrue) {

        while (lineEval.spinResults.indexOf("win_total") + 1 <= 0) {
            reelResults[7] == wild;
            lineEval.checkLineWins(reels);// TODO handle overwriting center wild in reelResults during check line wins

        }
    }

}


module.exports = lineEval;