
var getNumberOfPrograms = require("../dist/day12").getNumberOfPrograms
var getNumberOfGroups = require("../dist/day12").getNumberOfGroups;

var assert = require("assert");
var fs = require("fs");
var data1, data2;

before(function (done) {
    fs.readFile('test/day12-1.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data1= fileContents;
        done();
    });

});

before(function (done) {
    fs.readFile('test/day12-2.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data2 = fileContents;
        done();
    });

});

describe('Test for day12 ', function () {

    it('must be equal 6', function () {
        assert.equal(6, getNumberOfPrograms(data1));
    });

    it('must be equal 115', function () {
       assert.equal(115, getNumberOfPrograms(data2));
    });
    
    it('must be equal 2', function () {
        assert.equal(2, getNumberOfGroups(data1));
    });
 
    it('must be equal 221', function () {
        assert.equal(221, getNumberOfGroups(data2));
     });
     
});

