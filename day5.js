// Day 5 Part 2: Find the missing seat ID
// https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

var fs = require('fs');

var lines = fs.readFileSync('day5-input.txt', 'utf8').trim().split('\n');

var seatIds = [];

lines.forEach(function(pass) {
    var rowBinary = pass.slice(0, 7).replace(/F/g, '0').replace(/B/g, '1');
    var colBinary = pass.slice(7).replace(/L/g, '0').replace(/R/g, '1');
    var row = parseInt(rowBinary, 2);
    var col = parseInt(colBinary, 2);
    seatIds.push(row * 8 + col);
});

// Sort the seat IDs
seatIds.sort(function(a, b) { return a - b; });

// Find the missing seat (where gap between consecutive IDs is 2)
for (var i = 0; i < seatIds.length - 1; i++) {
    if (seatIds[i + 1] - seatIds[i] === 2) {
        console.log(seatIds[i] + 1);
    }
}