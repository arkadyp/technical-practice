var expect = require("chai").expect;
var assert = require("chai").assert;
var two_movies_match_flight_length = require('../es5/14_inflight_entertainment');

describe("Problem 14: two array values match sum", function() {
    it('should export a function', function(){
        assert.isFunction(two_movies_match_flight_length);
    });

    it('should return false when two movie times don\`t match flight length', function(){
        var result = two_movies_match_flight_length(10, [1, 2, 3, 4, 10]);
        expect(result).to.equal(false);
    });

    it('should return true when two movie times match flight length', function(){
        var result = two_movies_match_flight_length(10, [1, 2, 3, 4, 8, 12, 6]);
        expect(result).to.equal(true);
    });
});