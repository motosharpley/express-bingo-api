const rng = require('./RNG');
const data = require('./data');

const reelStop = {};

const W_01 = 1;
const S_02 = 2;
const S_03 = 3;
const S_04 = 4;
const S_05 = 5;
const S_06 = 6;
const S_07 = 7;
const S_08 = 8;
const SC_1 = 9;

reelStop.reelStrips = [
    ["reelStrip_1", [S_03, SC_1, S_07, S_05, S_03, S_08, S_03, S_07, S_04, S_07, S_04, S_07, S_05, S_04, W_01, S_05, S_02, S_06, S_04, S_08, S_07, SC_1, S_07, S_02, S_04, S_03, S_07, S_06, S_03, S_06, S_04, S_06, W_01, S_02, S_07, W_01, S_04, S_02, S_06, S_05, S_03, SC_1]],
    ["reelStrip_2", [S_05, S_07, S_02, S_07, S_08, S_07, S_02, S_05, S_08, S_05, S_08, S_05, S_03, S_05, W_01, S_07, S_08, S_02, S_05, SC_1, S_07, S_05, SC_1, S_08, S_06, S_08, S_05, S_08, S_06, W_01, S_07, S_05, S_07, S_02, S_07, S_08, S_04, S_05, S_07, SC_1, S_05, S_07]],
    ["reelStrip_3", [S_03, S_08, S_06, S_02, S_04, S_06, S_04, S_06, S_05, S_06, S_04, S_08, S_07, S_04, S_07, S_08, S_03, S_04, S_08, S_05, S_08, S_03, S_08, S_07, S_08, S_03, S_08, SC_1, S_06, S_04, S_06, S_03, S_06, S_07, W_01, S_06, S_08, S_04, S_08, S_06, S_03, S_08]],
    ["reelStrip_4", [S_07, S_02, S_05, S_02, S_08, S_03, S_02, S_04, S_03, S_04, S_05, S_04, S_03, S_05, S_02, S_05, S_02, S_06, W_01, S_04, S_07, S_02, S_07, S_08, W_01, S_08, S_02, S_08, SC_1, S_06, S_02, S_06, S_03, S_06, S_07, S_03, S_07, S_06, S_03, S_05, S_07, S_02]],
    ["reelStrip_5", [S_05, S_03, S_06, S_04, W_01, S_05, S_07, S_03, S_08, S_07, S_03, S_02, S_05, S_08, S_04, S_02, S_06, S_05, S_03, S_08, S_02, S_06, S_07, S_04, S_05, S_06, S_04, S_08, S_03, SC_1, S_08, S_07, S_05, S_02, S_07, S_04, S_06, S_05, S_04, S_07, S_05, S_03]]
];

reelStop.fsReelStrips = [
    ["fsReelStrip1", [S_07, S_06, W_01, S_08, S_03, S_02, S_07, S_08, S_05, S_02, S_08, S_07, S_06, S_08, S_04, S_06, S_08, S_07, S_02, S_03, S_08, S_06, W_01, S_03, S_07, S_06, S_03, S_08, W_01, S_07, S_06, S_08, S_03, S_07, S_06, S_05, S_08, S_02, S_04, S_03, S_07, S_06]],
    ["fsReelStrip1", [S_03, S_04, S_06, S_08, S_07, S_04, S_06, S_08, W_01, S_07, S_08, S_04, S_06, S_08, S_04, S_05, S_07, S_06, S_08, S_07, S_06, S_08, S_07, S_06, S_08, S_02, S_04, S_08, S_06, S_07, S_08, S_03, S_04, S_08, W_01, S_06, S_05, S_04, S_08, S_06, S_03, S_04]],
    ["fsReelStrip1", [S_07, S_06, S_05, S_07, S_08, S_05, S_04, S_07, W_01, S_05, S_08, S_07, S_04, S_05, W_01, S_07, S_05, S_03, W_01, S_05, S_08, S_07, S_05, S_08, S_07, S_02, S_05, S_04, S_07, S_02, S_06, S_08, S_05, S_04, S_06, S_07, S_08, S_02, S_06, S_05, S_07, S_06]],
    ["fsReelStrip1", [S_05, W_01, S_04, S_03, S_06, S_05, S_02, W_01, S_05, S_08, S_06, S_03, S_02, S_07, S_04, S_06, S_03, S_04, S_05, S_03, S_06, S_04, S_08, S_07, S_05, S_06, S_07, S_05, S_06, S_07, S_08, S_05, S_03, S_07, S_05, S_06, S_07, S_05, S_03, S_07, S_05, W_01]],
    ["fsReelStrip1", [S_02, S_03, S_04, S_02, S_08, S_06, S_04, S_05, S_02, S_08, S_03, S_07, S_03, S_04, S_08, W_01, S_05, S_03, S_04, S_05, S_08, S_02, S_05, S_08, S_02, S_05, S_08, S_06, S_02, S_04, S_08, S_03, S_05, S_08, S_06, S_02, S_07, W_01, S_05, S_04, S_02, S_03]]
];

const symbols = [W_01, S_02, S_03, S_04, S_05, S_06, S_07, S_08, SC_1];
const numScatters = 1;
let scatterSymbols = [SC_1];

reelStop.getReelStop = function(minStop, maxStop) {
    let reelIndex = rng.getRandomNumber(minStop,maxStop);

    return reelIndex;
}


reelStop.getReelStopArray = function(minStop, numReels) {
    data.reelStops = [];
    for (let i=0; i<numReels.length; i++) {
        let currentIndex = reelStop.getReelStop(minStop,numReels[i][1].length - 4);
        data.reelStops.push(currentIndex);
    }    
    return data.reelStops;    
}


reelStop.dynamicSetReelResults = function (reels) {
    data.reelResults = [];//clear previous results
    data.reelStops = [];//clear previous results
    // data.reelStops = [26,38,26,31,28];
    data.reelStops = reelStop.getReelStopArray(0, reels);
    for (let i = 0; i < reels.length; i++) {
        data.reelResults.push(reels[i][1][data.reelStops[i]]);
        data.reelResults.push(reels[i][1][data.reelStops[i] + 1]);
        data.reelResults.push(reels[i][1][data.reelStops[i] + 2]);
    }
}


module.exports = reelStop;