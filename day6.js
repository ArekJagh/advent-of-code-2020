// Day 6 Part 2: Count questions where EVERYONE in the group answered yes
// https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

var fs = require('fs');

var input = fs.readFileSync('day6-input.txt', 'utf8').trim();
var groups = input.split('\n\n');

var total = 0;

groups.forEach(function(group) {
    var people = group.split('\n');
    var firstPerson = people[0].split('');

    // Count letters that appear in every person's answers
    firstPerson.forEach(function(letter) {
        if (people.every(function(person) {
            return person.includes(letter);
        })) {
            total++;
        }
    });
});

console.log(total);