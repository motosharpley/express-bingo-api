const rng = require('./RNG');

const reelStop = {};

reelStop.getReelStop = function(minStop, maxStop) {
    let reelIndex = rng.getRandomNumber(minStop,maxStop);

    return reelIndex;
}

reelStop.reelIndexArr = [];

reelStop.getReelStopArray = function(minStop, maxStop, numReels) {

    for (let i=0; i<numReels; i++) {
        let currentIndex = reelStop.getReelStop(minStop,maxStop);
        reelStop.reelIndexArr.push(currentIndex);
    }    
    return reelStop.reelIndexArr;    
}


module.exports = reelStop;