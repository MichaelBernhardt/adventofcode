var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

let counter = 1

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i - 1]){
        counter++
        console.log(array[i] + " ");
    }
}

console.log("Length of input: " + array.length)
console.log("Total increase: " + counter);