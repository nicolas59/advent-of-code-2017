var getNumberOfSteps = require("../dist/day5").getNumberOfSteps;


var addOperationStep2 = require("../dist/day5").addOperationStep2;
var addOperationStep1 = require("../dist/day5").addOperationStep1;

var assert = require("assert");
var fs = require("fs");
var data;
before(function (done) {
    fs.readFile('test/day5.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data = fileContents;
        done();
    });
});

describe('Test for day5', function () {

    it('must be equal 4', function () {
        var data1 = "0 3 0 1 -3".split(" ").join("\n");
        assert.equal(5, getNumberOfSteps(data1, addOperationStep1));
    });

    it('must be equal +387096', function () {
        assert.equal(+387096, getNumberOfSteps(data, addOperationStep1));
    });

    it('must be equal 10', function () {
        var data1 = "0 3 0 1 -3".split(" ").join("\n");
        assert.equal(10, getNumberOfSteps(data1, addOperationStep2));
    });
    
    it('must be equal +28040648', function () {
        assert.equal(+28040648, getNumberOfSteps(data, addOperationStep2));
    });  

});