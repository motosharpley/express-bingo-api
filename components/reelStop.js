const rng = require('./RNG');

const reelStop = {};

reelStop.getReelStop = function(minStop, maxStop) {
    let reelIndex = rng.getRandomNumber(minStop,maxStop);

    return reelIndex;
}

reelStop.getReelStopArray = function(minStop, maxStop, numReels) {
    let reelIndexArr = [];

    for (let i=0; i<numReels; i++) {
        let currentIndex = reelStop.getReelStop(minStop,maxStop);
        reelIndexArr.push(currentIndex);
    }
    return reelIndexArr;
}

module.exports = reelStop;