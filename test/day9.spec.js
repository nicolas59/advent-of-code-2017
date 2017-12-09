
var solve1 = require("../dist/day9").getToltalScore

var assert = require("assert");
var fs = require("fs");
var data, data2;

before(function (done) {
    fs.readFile('test/day9.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data2 = fileContents;
        done();
    });

});

describe('Test for day9 / Score', function () {

    it('must be equal 1', function () {
        assert.equal(1, solve1("{}").score);
    });

    it('must be equal 6', function () {
        assert.equal(6, solve1("{{{}}}").score);
    });

    it('must be equal 5', function () {
        assert.equal(5, solve1("{{},{}}").score);
    });

    it('must be equal 16', function () {
        assert.equal(16, solve1("{{{},{},{{}}}}").score);
    });

    it('must be equal 1', function () {
        assert.equal(1, solve1("{<a>,<a>,<a>,<a>}").score);
    });

    it('must be equal 9', function () {
        assert.equal(9, solve1("{{<ab>},{<ab>},{<ab>},{<ab>}}").score);
    });

    it('must be equal 9', function () {
        assert.equal(9, solve1("{{<!!>},{<!!>},{<!!>},{<!!>}}").score);
    });

    it('must be equal 3', function () {
        assert.equal(3, solve1("{{<a!>},{<a!>},{<a!>},{<ab>}}").score);
    });

    it('must be equal 20530', function () {
        assert.equal(20530, solve1(data2).score);
    });


});


describe('Test for day9 non canceledChar', function () {

    it('must be equal 0', function () {
        assert.equal(0, solve1("<>").nonCanceledCharByGarbage);
    });

    it('must be equal 17', function () {
        assert.equal(17, solve1("<random characters>").nonCanceledCharByGarbage);
    });
    it('must be equal 3', function () {
        assert.equal(3, solve1("<<<<>").nonCanceledCharByGarbage);
    });
    it('must be equal 2', function () {
        assert.equal(2, solve1("<{!>}>").nonCanceledCharByGarbage);
    });
    it('must be equal 0', function () {
        assert.equal(0, solve1("<!!>").nonCanceledCharByGarbage);
    });
    it('must be equal 0', function () {
        assert.equal(0, solve1("<!!!>>").nonCanceledCharByGarbage);
    });
    it('must be equal 10', function () {
        assert.equal(10, solve1("<{o\"i!a,<{i<a>").nonCanceledCharByGarbage);
    });
    it('must be equal +9978', function (done) {
        assert.equal(+9978, solve1(data2).nonCanceledCharByGarbage);
        done();
    });

    
});