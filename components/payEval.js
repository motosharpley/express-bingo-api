// Symbol	            Type	5	    4	    3	    2
// *1* Symbol 01    	Wild	5000    500	    50	    5
// *2* Symbol 02        Line	500	    50	    20	
// *3* Symbol 03        Line	250	    50	    15	
// *4* Symbol 04        Line	200     50	    15	
// *5* Symbol 05        Line	150	    30	    10	
// *6* Symbol 06        Line	150	    30	    10	
// *7* Symbol 07        Line	100	    25	    5	
// *8* Symbol 08        Line	100	    25	    5	
// *9* Scat 01


const lineEval = require('./lineEval');
const fs = require('fs');
const data = require('./data');
const reelStop = require('./reelStop');

const payEval = {};

payEval.creditsPerLine = function (reels) {
    lineEval.checkLineWins(reels);
    let linePay = 0;
    let winTotal = 0;
    let betLevel = 1; // TODO Use betLevel as linewin multiplier - accept as parameter from request message
    //iterate through each line win array in the spinResults array and calculate pay based on symbol and hit count
    for (i = 2; i < data.spinResults.length; i++) {
        linePay = 0;
        let symbol = data.spinResults[i][1];
        let hitcount = data.spinResults[i][4];
        let currentLine = data.spinResults[i][2];

        switch (symbol) {
            case 1:
                if (hitcount == 2) linePay = 5;
                else if (hitcount == 3) linePay = 50;
                else if (hitcount == 4) linePay = 500;
                else if (hitcount == 5) linePay = 5000;
                break;
            case 2:
                if (hitcount == 3) linePay = 20;
                else if (hitcount == 4) linePay = 50;
                else if (hitcount == 5) linePay = 500;
                break;
            case 3:
                if (hitcount == 3) linePay = 20;
                else if (hitcount == 4) linePay = 50;
                else if (hitcount == 5) linePay = 250;
                break;
            case 4:
                if (hitcount == 3) linePay = 15;
                else if (hitcount == 4) linePay = 50;
                else if (hitcount == 5) linePay = 200;
                break;
            case 5:
                if (hitcount == 3) linePay = 10;
                else if (hitcount == 4) linePay = 30;
                else if (hitcount == 5) linePay = 150;
                break;
            case 6:
                if (hitcount == 3) linePay = 10;
                else if (hitcount == 4) linePay = 30;
                else if (hitcount == 5) linePay = 150;
                break;
            case 7:
                if (hitcount == 3) linePay = 5;
                else if (hitcount == 4) linePay = 25;
                else if (hitcount == 5) linePay = 100;
                break;
            case 8:
                if (hitcount == 3) linePay = 5;
                else if (hitcount == 4) linePay = 25;
                else if (hitcount == 5) linePay = 100;
                break;
        }
        // CHECK FOR MULTIPLE WINS ON SAME LINE -- THIS IS AN EDGE CASE WHERE THE LINE STARTS WITH WILD SYMBOLS BUT COMPLETES A HIGHER VALUE SYMBOL WIN LATER ON IN LINE EVALUATION
        for(let x = 2; x<data.spinResults.length-1; x++){
            if (data.spinResults[x][2] == currentLine){
                if(data.spinResults[x][6] > linePay){
                    linePay = 0;
                }
                else if(data.spinResults[x][6] < linePay){
                    data.spinResults[x][6] = 0;
                }
                // check for tie and keep wild as winner in event of wild
                if(data.spinResults[x][6] == linePay){
                    linePay = 0;
                }
                
            }
        }
        linePay = linePay * betLevel;
        data.spinResults[i].push("line_pay", linePay);
    }
    // add up the final set of linePay values to get winTotal
    for(let x = 2; x<data.spinResults.length-1; x++){
        winTotal += data.spinResults[x][6]
    }
    data.spinResults.push(["win_total", winTotal]);
    
    data.playResult.push(data.spinResults);
    console.log(data.spinResults[data.spinResults.length-2][3]);
    if (data.spinResults[data.spinResults.length-2][3]>2){
        console.log("payeval freespin");
        for(let i=0; i<lineEval.numSpins; i++){
            payEval.creditsPerLine(reelStop.fsReelStrips);
        }
    }

}

module.exports = payEval;