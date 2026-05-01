// Day 3 Part 2: Toboggan Trajectory
// Count trees for multiple slopes and multiply results together
// https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

var fs = require('fs');

var lines = fs.readFileSync('day3-input.txt', 'utf8').trim().split('\n');

function countTrees(right, down) {
    var trees = 0;
    var col = 0;
    for (var row = 0; row < lines.length; row += down) {
        if (lines[row][col % lines[row].length] === '#') trees++;
        col += right;
    }
    return trees;
}

var slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
];

var result = 1;
slopes.forEach(function(slope) {
    result *= countTrees(slope[0], slope[1]);
});

console.log(result);