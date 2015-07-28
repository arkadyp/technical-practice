var expect = require("chai").expect;
var assert = require("chai").assert;
var search = require('../es5/binary_search');

describe("Binary Search", function() {
    it('should export a function', function(){
        assert.isFunction(search, 'exports a function');
    });

    it('should work with an even-length array', function() {
        var input = [-10, 0, 2, 6, 10, 11, 12, 20, 100, 500];
        for (let i = 0; i < input.length; i++) {
            expect(search(input, input[i])).to.equal(true, `found ${input[i]} in ${input}`);
        }
        expect(search(input, -100)).to.equal(false, `didn't find -100 in ${input}`);
    });

    it('should work with an odd-length array', function() {
        var input = [-10, 0, 2, 6, 10, 11, 12, 20, 100, 500, 501];
        for (let i = 0; i < input.length; i++) {
            expect(search(input, input[i])).to.equal(true, `found ${input[i]} in ${input}`);
        }
        expect(search(input, -100)).to.equal(false, `didn't find -100 in ${input}`);
    });

    it('should work with an empty array', function() {
        expect(search([], 1)).to.equal(false);
    });
});