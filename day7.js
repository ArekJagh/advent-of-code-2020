// Day 7 Part 2: Count total bags inside a shiny gold bag
// https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

var fs = require('fs');

var lines = fs.readFileSync('day7-input.txt', 'utf8').trim().split('\n');

// Build a map of bag color -> list of {count, color} objects
var rules = {};

lines.forEach(function(line) {
    var parts = line.split(' bags contain ');
    var color = parts[0];
    rules[color] = [];

    if (!parts[1].includes('no other bags')) {
        parts[1].split(', ').forEach(function(item) {
            var match = item.match(/(\d+) (.+?) bag/);
            if (match) {
                rules[color].push({ count: parseInt(match[1]), color: match[2] });
            }
        });
    }
});

// Count total bags inside a given bag color
function countBags(color) {
    var total = 0;
    rules[color].forEach(function(inner) {
        // Add the bags themselves plus all bags inside them
        total += inner.count + inner.count * countBags(inner.color);
    });
    return total;
}

console.log(countBags('shiny gold'));