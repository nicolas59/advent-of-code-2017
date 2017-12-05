var isAvailablePassPhrases = require("../dist/day4").isAvailablePassPhrases
var getNumberOfAvailablesPassPhrases = require("../dist/day4").getNumberOfAvailablesPassPhrases;
var isAvailablePassPhrasesWitoutAnagram = require("../dist/day4").isAvailablePassPhrasesWitoutAnagram;
var assert = require("assert");
var fs = require("fs");
var data;
before(function (done) {
    fs.readFile('test/day4.txt', 'utf8', function (err, fileContents) {
        if (err) throw err;
        data = fileContents;
        done();
    });
});

describe('Test for day4', function () {

    it('must be equal true', function () {
        assert.equal(true, isAvailablePassPhrases("aa bb cc dd ee"));
    });
    it('must be equal false', function () {
        assert.equal(false, isAvailablePassPhrases("aa bb cc dd aa"));
    });
    it('must be equal true', function () {
       assert.equal(true, isAvailablePassPhrases("aa bb cc dd aaa"));
    });

    
    it('must be equal 451', function () {
        assert.equal(451, getNumberOfAvailablesPassPhrases(data, isAvailablePassPhrases));
     });

     it('must be equal true', function () {
        assert.equal(true, isAvailablePassPhrasesWitoutAnagram("abcde fghij"));
    });

    it('must be equal false', function () {
        assert.equal(false, isAvailablePassPhrasesWitoutAnagram("abcde xyz ecdab"));
    });
    it('must be equal true', function () {
        assert.equal(true, isAvailablePassPhrasesWitoutAnagram("a ab abc abd abf abj"));
    });
    it('must be equal true', function () {
        assert.equal(true, isAvailablePassPhrasesWitoutAnagram("iiii oiii ooii oooi oooo"));
    });
    it('must be equal false', function () {
        assert.equal(false, isAvailablePassPhrasesWitoutAnagram("oiii ioii iioi iiio"));
    });

    it('must be equal 223', function () {
        assert.equal(223, getNumberOfAvailablesPassPhrases(data, isAvailablePassPhrasesWitoutAnagram));
     });

});
