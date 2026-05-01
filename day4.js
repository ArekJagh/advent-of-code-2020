// Day 4 Part 2: Passport Processing with validation
// https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

var fs = require('fs');

var input = fs.readFileSync('day4-input.txt', 'utf8').trim();
var passports = input.split('\n\n');

function validate(passport) {
    var fields = {};
    passport.split(/\s+/).forEach(function(pair) {
        var parts = pair.split(':');
        fields[parts[0]] = parts[1];
    });

    // byr: 1920-2002
    var byr = parseInt(fields['byr']);
    if (!fields['byr'] || !/^\d{4}$/.test(fields['byr']) || byr < 1920 || byr > 2002) return false;

    // iyr: 2010-2020
    var iyr = parseInt(fields['iyr']);
    if (!fields['iyr'] || !/^\d{4}$/.test(fields['iyr']) || iyr < 2010 || iyr > 2020) return false;

    // eyr: 2020-2030
    var eyr = parseInt(fields['eyr']);
    if (!fields['eyr'] || !/^\d{4}$/.test(fields['eyr']) || eyr < 2020 || eyr > 2030) return false;

    // hgt: 150-193cm or 59-76in
    var hgt = fields['hgt'];
    if (!hgt) return false;
    if (hgt.endsWith('cm')) {
        var cm = parseInt(hgt);
        if (cm < 150 || cm > 193) return false;
    } else if (hgt.endsWith('in')) {
        var inches = parseInt(hgt);
        if (inches < 59 || inches > 76) return false;
    } else return false;

    // hcl: # followed by exactly 6 hex characters
    if (!fields['hcl'] || !/^#[0-9a-f]{6}$/.test(fields['hcl'])) return false;

    // ecl: one of these values
    if (!['amb','blu','brn','gry','grn','hzl','oth'].includes(fields['ecl'])) return false;

    // pid: exactly 9 digits
    if (!fields['pid'] || !/^\d{9}$/.test(fields['pid'])) return false;

    return true;
}

var validCount = 0;
passports.forEach(function(passport) {
    if (validate(passport)) validCount++;
});

console.log(validCount);