
/*
b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10
*/


var solve1 = require("../dist/day8").solve1
var solve2 = require("../dist/day8").solve2;

var assert = require("assert");
var fs = require("fs");
var data, data2;

before(function (done) {
    fs.readFile('test/day8.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data2 = fileContents;
        done();
    });

});

describe('Test for day8', function () {
 var data = "b inc 5 if a > 1\n"
 + "a inc 1 if b < 5\n"  
 + "c dec -10 if a >= 1\n"
 + "c inc -20 if c == 10";

    it('must be equal 1', function () {
        assert.equal(1, solve1(data));
    });

    it('must be equal 4416', function () {
       assert.equal(4416, solve1(data2));
    });
    
    it('must be equal 10', function () {
        assert.equal(10, solve2(data));
    });

    it('must be equal 5199', function () {
       assert.equal(5199, solve2(data2));
    });
    
});
