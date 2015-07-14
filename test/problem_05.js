var expect = require("chai").expect;
var assert = require("chai").assert;
var make_change = require('../es5/5_make_change');

// http://rosettacode.org/wiki/Count_the_coins#Iterative
function countcoins(t, o) {
    'use strict';
    var targetsLength = t + 1;
    var operandsLength = o.length;
    t = [1];
 
    for (var a = 0; a < operandsLength; a ++) {
        for (var b = 1; b < targetsLength; b ++) {
 
            // initialise undefined target
            t[b] = t[b] ? t[b] : 0;
 
            // accumulate target + operand ways
            t[b] += (b < o[a]) ? 0 : t[b - o[a]];
        }
    }
 
    return t[targetsLength - 1];
}

describe("Problem 5: make change", function() {
    it('should work with 4, [1,2,3]', function() {
        expect(make_change(4, [1,2,3])).to.equal(4);

    });

    it('should work with 100, [1, 5, 10, 25, 50, 100]', function() {
        expect(make_change(100, [1, 5, 10, 25, 50, 100])).to.equal(293);
        expect(make_change(100, [1, 5, 10, 25, 50, 100])).to.equal(countcoins(100, [1, 5, 10, 25, 50, 100]));
    });

    it('should work with 200, [1, 5, 10, 25, 50, 100]', function() {
        expect(make_change(200, [1, 5, 10, 25, 50, 100])).to.equal(2728);
        expect(make_change(200, [1, 5, 10, 25, 50, 100])).to.equal(countcoins(200, [1, 5, 10, 25, 50, 100]));
    });

    it('should work with 2000, [1, 5, 10, 25, 50, 100]', function() {
        expect(make_change(2000, [1, 5, 10, 25, 50, 100])).to.equal(countcoins(2000, [1, 5, 10, 25, 50, 100]));
    });
});