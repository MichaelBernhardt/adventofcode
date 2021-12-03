let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let gammaRate = 0;
let epsilonRate = 0;
let numberOf0 = 0;
let numberOf1 = 0;
let gammaRateBinary = "";
let epsilonRateBinary = "";

for (let a = 0; a < 12; a++) {
    numberOf0 = 0;
    numberOf1 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(a) == "0") {
            numberOf0++;
        } else {
            numberOf1++;
        }
    }

    if (numberOf0 > numberOf1) {
        gammaRateBinary = gammaRateBinary + "0";
        epsilonRateBinary = epsilonRateBinary + "1"
    } else {
        gammaRateBinary = gammaRateBinary + "1";
        epsilonRateBinary = epsilonRateBinary + "0"
    }
}

gammaRate = parseInt(gammaRateBinary, 2);
epsilonRate = parseInt(epsilonRateBinary, 2);
const powerConsumption = gammaRate * epsilonRate;

console.log("gammaRateBinary: " + gammaRateBinary);
console.log("epsilonRateBinary: " + epsilonRateBinary);
console.log("gammaRate: " + gammaRate);
console.log("epsilonRate: " + epsilonRate);
console.log("Power Consumption: " + powerConsumption);
