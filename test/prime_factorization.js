var expect = require("chai").expect;
var assert = require("chai").assert;
var largestPrimeFactor = require('../es5/prime_factorization').largestPrimeFactor;
var primeFactors = require('../es5/prime_factorization').primeFactors;

describe("Prime Factorization", function() {
    it('should export a function', function(){
        assert.isFunction(largestPrimeFactor);
        assert.isFunction(primeFactors);
    });

    it('should get prime factors', function() {
        var result = primeFactors(49);
        expect(result).to.deep.equal([7, 7], 'works with 49');

        result = primeFactors(20);
        expect(result).to.deep.equal([2, 2, 5], 'works with 20');

        result = primeFactors(21);
        expect(result).to.deep.equal([3, 7], 'works with 21');

        result = primeFactors(1243245576856897);
        expect(result).to.deep.equal([1243245576856897], 'works with 1243245576856897');
    })

    it('should get the largest prime factor', function() {
        var result = largestPrimeFactor(49);
        expect(result).to.equal(7, 'works with 7');

        var result = largestPrimeFactor(100);
        expect(result).to.equal(5, 'works with 100');

        var result = largestPrimeFactor(13195);
        expect(result).to.equal(29, 'works with 13195');

        var result = largestPrimeFactor(600851475143);
        expect(result).to.equal(6857, 'works with 600851475143');
    });
});
