var getDistance = require("../day3").getDistance
var getValue = require("../day3").getValue

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

describe('Test for day3', function () {

    it('must be equal 0', function () {
        assert.equal(0, getDistance("1"));
    });
    it('must be equal 3', function () {
        assert.equal(3, getDistance("12"));
    });
    it('must be equal 2', function () {
       assert.equal(2, getDistance("23"));
    });
    it('must be equal 31', function () {
       assert.equal(31, getDistance("1024"));
    });
    it('must be equal +480', function () {
        assert.equal(+480, getDistance("347991"));
     });
    
     it('must be equal 4', function () {
        assert.equal(0, getValue("3"));
    });

    it('must be equal 23', function () {
        assert.equal(23, getValue("12"));
    });

    it('must be equal 806', function () {
        assert.equal(806, getValue("748"));
    });

    it('must be equal 747', function () {
        assert.equal(747, getValue("747"));
    });

    it('must be equal +349975', function () {
        assert.equal(+349975, getValue("347991"));
    });

});
