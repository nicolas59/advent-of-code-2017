
var findRoad = require("../dist/day19").findRoad
//var getNumberOfGroups = require("../dist/day12").getNumberOfGroups;

var assert = require("assert");
var fs = require("fs");
var data1, data2;

before(function (done) {
    fs.readFile('test/day19-1.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data1= fileContents;
        done();
    });

});

before(function (done) {
    fs.readFile('test/day19-2.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data2 = fileContents;
        done();
    });

});

describe('Test for day19 ', function () {

    it('must be equal ABCDEF', function () {
        assert.equal("ABCDEF", findRoad(data1).phrase);
    });

    it('must be equal GINOWKYXH', function () {
       assert.equal("GINOWKYXH", findRoad(data2).phrase);
    });
    
    it('must be equal 38', function () {
        assert.equal(38, findRoad(data1).steps);
    });
     
    it('must be equal 16636', function () {
        assert.equal(16636, findRoad(data2).steps);
    });
     
});

