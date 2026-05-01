// Day 2 Part 2: Password Philosophy
// Now the two numbers are positions (1-indexed), exactly one must contain the letter
// https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

var fs = require('fs');

var lines = fs.readFileSync('day2-input.txt', 'utf8').trim().split('\n');

var validCount = 0;

lines.forEach(function(line) {
    var parts = line.split(' ');
    var range = parts[0].split('-');
    var pos1 = parseInt(range[0]) - 1;
    var pos2 = parseInt(range[1]) - 1;
    var letter = parts[1][0];
    var password = parts[2];

    // Exactly one of the two positions must contain the letter
    var first = password[pos1] === letter;
    var second = password[pos2] === letter;

    if (first !== second) validCount++;
});

console.log(validCount);