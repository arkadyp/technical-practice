var expect = require("chai").expect;
var assert = require("chai").assert;
var make_change = require('../es5/5_make_change');

describe("Problem 5: make change", function() {
    it('should work with 4, [1,2,3]', function() {
        expect(make_change(4, [1,2,3])).to.equal(4);
    });

    it('should work with 100, [1, 5, 10, 25, 50, 100]', function() {
        expect(make_change(100, [1, 5, 10, 25, 50, 100])).to.equal(293);
    });

    it('should work with 200, [1, 5, 10, 25, 50]', function() {
        expect(make_change(200, [1, 5, 10, 25, 50])).to.equal(2728);
    });

    it('should work with 2000, [1, 5, 10, 25, 50]', function() {
        expect(make_change(2000, [1, 5, 10, 25, 50])).to.equal(155848897);
    });
});