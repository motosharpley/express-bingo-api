const reelStop = require('./reelStop');


const symbols = [01,02,03,04,05,06,07,08,09,10];
const reel_strip_1 = [01,02,03,04,05,06,07,08,09,10,01,02,03,04,05,06,07,08,09,10];
const reel_strip_2 = [01,02,03,04,05,06,07,08,09,10,01,02,03,04,05,06,07,08,09,10];
const reel_strip_3 = [01,02,03,04,05,06,07,08,09,10,01,02,03,04,05,06,07,08,09,10];


// example line 1
// 101
// 010
// 000
// binary as array = [1,0,0,0,1,0,1,0,0] --column wise representation
const line_1 = [1,0,0,0,1,0,1,0,0];
// example line 2 
// 111
// 000
// 000
const line_2 = [1,0,0,1,0,0,1,0,0];
// example line 3
// 000
// 111
// 000
const line_3 = [0,1,0,0,1,0,0,1,0];


// get reel stops
// call rng and get number within range of reel strip length
// set top line with symbols at index of rng result
// for each column increment rng result and get symbol from reel strip at index of rng ++
let reel_1 = [];
let reel_2 = [];
let reel_3 = [];
let reel_4 = [];
let reel_5 = [];

// forEach reelstrip let rngResult =
let rngResult = reelStop.getReelStop(0, reel_strip_1.length);

reel_1 = reel_strip_1.push(reel_strip_1[rngResult]).push(reel_strip_1[rngResult++]).push(reel_strip_1[rngResult++]);
reel_2 = reel_strip_2.push(reel_strip_2[rngResult]);
reel_3 = reel_strip_3.push(reel_strip_3[rngResult]);






// make bit map of reels / symbols at those stops
// forEach symbol if symbol exists result array adds 1 else add 0
// concat reel stop symbols then loop through and check if current symbol exists 


// evaluate bitmap against pay tables for each line and return line wins
// forEach line check for symbol on that line 
let symbols_on_line = 0;
// if symbol on line then increment symbols_on_line 