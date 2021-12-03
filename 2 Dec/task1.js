let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let depth = 0;
let horizontal = 0;
let instuctionValue = 0;

for (let i = 0; i < array.length; i++) {

    instuctionValue = parseInt((array[i].match(/\d+/)));
    
    if (array[i].includes("forward")) {
        horizontal = horizontal + instuctionValue;
    }

    if (array[i].includes("down")) {
        depth = depth + instuctionValue;
    }

    if (array[i].includes("up")){
        depth = depth - instuctionValue;
    }
}

const finalAnswer = depth * horizontal;

console.log("Horizontal: " + horizontal);
console.log("Depth: " + depth);
console.log("Final answer. Horizontal x Depth = " + finalAnswer);