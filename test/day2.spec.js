var checkSumByLine = require("../dist/day2").checkSumByLine;
var checkSum = require("../dist/day2").checkSum;
var checkSumByLineWithDivisible = require("../dist/day2").checkSumByLineWithDivisible
var checkSumWithDivisible = require("../dist/day2").checkSumWithDivisible

var assert = require("assert");
var fs = require("fs");
var data;
before(function (done) {
    fs.readFile('test/day2.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data = fileContents;
        done();
    });
});

describe('Test for day2', function () {

    it('must be equal 8', function () {
        assert.equal(8, checkSumByLine("5    1 9 5"));
    });
    it('must be equal 4', function () {
        assert.equal(4, checkSumByLine("7     5    3"));
    });
    it('must be equal 6', function () {
        assert.equal(6, checkSumByLine("2   4 6 8"));
    });

    var lines = "5 1 9 5\n"
        + "7 5 3\n"
        + "2 4 6    8"
    it('must be equal 18', function () {
        assert.equal(18, checkSum(lines, checkSumByLine));
    });


    it('must be equal 39126', function () {
        assert.equal(39126, checkSum(data, checkSumByLine));
    });


    it('must be equal 4', function () {
        assert.equal(4, checkSumByLineWithDivisible("5 9 2 8"));
    });
    it('must be equal 3', function () {
        assert.equal(3, checkSumByLineWithDivisible("9 4 7 3"));
    });
    it('must be equal 2', function () {
        assert.equal(2, checkSumByLineWithDivisible("3 8 6 5"));
    });

    var lines2 = "5 9 2 8\n"
        + "9 4 7 3\n"
        + "3 8 6 5"
    it('must be equal 9', function () {
        assert.equal(9, checkSum(lines2,checkSumByLineWithDivisible));
    });

    it('must be equal 258', function () {
        assert.equal(258, checkSum(data, checkSumByLineWithDivisible));
    });

});
