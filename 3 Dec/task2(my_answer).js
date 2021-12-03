let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let oxygenGeneratorRating = 0;
let co2ScrubberRating = 0;

let mostCommonValue = "";
let leastCommonValue = "";

let oxygenGeneratorRatingBinary = "";
let co2ScrubberRatingBinary = "";

//Search through each bit
for (let a = 0; a < 12; a++) {

    numberOf0 = 0;
    numberOf1 = 0;

    //Search through each line for the most common bit
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(a) == "0") {
            numberOf0++;
        } else {
            numberOf1++;
        }
    }
    //
    if (numberOf0 > numberOf1) {
        mostCommonValue = "0";
    } else if (numberOf0 == numberOf1){
        mostCommonValue = "1";
    } else {
        mostCommonValue = "1";
    } 

    let result = array.filter(word => word.charAt(a) != mostCommonValue);

    if (result.length == 1){
        oxygenGeneratorRatingBinary =  result;
    } else {
         array = result
    }
    
}

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
    //
    if (numberOf0 < numberOf1) {
        leastCommonValue = "0";
    } else if (numberOf0 == numberOf1){
        leastCommonValue = "0";
    } else {
        leastCommonValue = "1";
    }

    let result = array.filter(word => word.charAt(a) != leastCommonValue);

    if (result.length == 1){
        console.log(result)
        co2ScrubberRatingBinary =  result
    } else {
         array = result
    }
}

oxygenGeneratorRating = parseInt(oxygenGeneratorRatingBinary, 2);
co2ScrubberRating = parseInt(co2ScrubberRatingBinary, 2);
const LifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;

console.log("oxygenGeneratorRatingBinary: " + oxygenGeneratorRatingBinary);
console.log("co2ScrubberRatingBinary: " + co2ScrubberRatingBinary);
console.log("oxygenGeneratorRating: " + oxygenGeneratorRating);
console.log("co2ScrubberRating: " + co2ScrubberRating);
console.log("Life Support Rating: " + LifeSupportRating);

