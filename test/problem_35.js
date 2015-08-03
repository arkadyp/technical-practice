var expect = require("chai").expect;
var assert = require("chai").assert;
var shuffle = require('../es5/35_shuffle');

describe('Problem 35: In-place shuffle', function() {
    it('should export a function', function() {
        assert.isFunction(shuffle, 'exports a function');
    });
});