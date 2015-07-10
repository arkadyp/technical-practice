var expect = require("chai").expect;
var assert = require("chai").assert;
var everyone_available = require('../es5/4_everyone_available');

describe("Problem 4: Everyone is available", function(){
    it('should export a function', function(){
        assert.isFunction(everyone_available);
    });

    it('should return an array', function(){
        assert.isArray(everyone_available([[1, 2]]));
    });

    describe('should find time when everyone is free', function(){
        it('input: [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]', function(){
            var result = everyone_available([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]);
            expect(result).to.deep.equal([[0, 1], [3, 8], [9, 12]]);
        })

        it('input: [[3, 7], [0, 1], [11, 13], [13, 14], [20, 21]]', function(){
            var result = everyone_available([[3, 7], [0, 1], [11, 13], [13, 14], [20, 21]]);
            expect(result).to.deep.equal([[0, 1], [3, 7], [11, 14], [20, 21]]);
        })
    });
})






