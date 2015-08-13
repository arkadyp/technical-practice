var assert = require('chai').assert;
var expect = require('chai').expect;
var SolveWaterProblem = require('../es5/water_problem');

describe('Water problem', function(){
    it('should export a function', function() {
        assert.isFunction(SolveWaterProblem, 'exports a function');
    });

    it('should solve the problem', function() {
        var result = SolveWaterProblem([2,0,4,1,2,3]);
        expect(result).to.equal(5, 'works with [2,0,4,1,2,3]');

        var result = SolveWaterProblem([7, 1, 0, 1, 4, 2, 3, 3, 3, 6, 3, 3, 1]);
        expect(result).to.equal(31, 'works with [7, 1, 0, 1, 4, 2, 3, 3, 3, 6, 3, 3, 1]');

        var result = SolveWaterProblem([3, 4, 5, 7, 1, 0, 1, 4, 2, 3, 3, 3, 6, 3, 3, 1]);
        expect(result).to.equal(31, 'works with [3, 4, 5, 7, 1, 0, 1, 4, 2, 3, 3, 3, 6, 3, 3, 1]');

        var result = SolveWaterProblem([7, 1, 0, 1, 4, 2, 3, 3, 3, 6, 3, 3, 1, 4, 0, 2]);
        expect(result).to.equal(38, 'works with [7, 1, 0, 1, 4, 2, 3, 3, 3, 6, 3, 3, 1, 4, 0, 2]');
    });
});