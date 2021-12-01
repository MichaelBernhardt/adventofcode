let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");

let counter = 0
let slidingWindow = new Array()
let a, b, c;

for (let i = 0; i < array.length - 1; i++) {

    a = parseInt(array[i]);
    b = parseInt(array[i + 1]);
    c = parseInt(array[i + 2]);

    slidingWindow[i] = a + b + c;

    if (slidingWindow[i] > slidingWindow[i - 1]) {
        counter++;
    }
}

console.log("Length of input: " + array.length)
console.log("Total increase: " + counter);