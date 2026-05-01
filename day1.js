// Day 1 Part 2: Find three entries that sum to 2020 and multiply them together
// https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

var fs = require('fs');

var numbers = fs.readFileSync('day1-input.txt', 'utf8').trim().split('\n').map(Number);

for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
        for (var k = j + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[j] + numbers[k] === 2020) {
                console.log(numbers[i] * numbers[j] * numbers[k]);
            }
        }
    }
}