
/*

    1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
    1111 produces 4 because each digit (all 1) matches the next.
    1234 produces 0 because no digit matches the next.
    91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
*/

var assert = require('assert');
var getNumberOfCycles = require("../dist/day6").getNumberOfCycles

describe('Test for day6 ', function () {
    it('must be equal 5', function () {
        assert.equal(5, getNumberOfCycles("0 2 7 0"));
    });  
   

    //
    it('must be equal 7864', function () {
        assert.equal(7864, getNumberOfCycles("0	5	10	0	11	14	13	4	11	8	8	7	1	4	12	11"));
    });  
});

