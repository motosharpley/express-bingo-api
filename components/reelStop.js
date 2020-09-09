const rng = require('./RNG');

const reelStop = {};

reelStop.getReelStop = function(minStop, maxStop) {
    let reelIndex = rng.getRandomNumber(minStop,maxStop);

    return reelIndex;
}

reelStop.reelIndexArr = [];

// TODO Handle Different Length ReelStrips
reelStop.getReelStopArray = function(minStop, numReels) {
    reelStop.reelIndexArr = [];
    for (let i=0; i<numReels.length; i++) {
        let currentIndex = reelStop.getReelStop(minStop,numReels[i][1].length - 4);
        reelStop.reelIndexArr.push(currentIndex);
    }    
    return reelStop.reelIndexArr;    
}


module.exports = reelStop;