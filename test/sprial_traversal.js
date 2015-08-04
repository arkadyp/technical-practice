var expect = require('chai').expect;
var assert = require('chai').assert;
var spiralTraversal = require('../es5/spiral_traversal');

describe('Spiral Traversal', function() {
    it('should export a function', function() {
        assert.isFunction(spiralTraversal, 'exports function');
    });

    describe('should trave in a spiral manner', function() {
        var result;
        
        it('works with 3x3', function() {
          result = spiralTraversal([
                [1,2,3],
                [4,5,6],
                [7,8,9]
          ]);
          expect(result).to.deep.equal([1, 2, 3,6, 9, 8, 7, 4, 5]);
        });


        it('works with 1x5', function() {
          result = spiralTraversal([
                [1],
                [2],
                [3],
                [4],
                [5]
          ]);
          expect(result).to.deep.equal([1, 2, 3, 4, 5]);
        })

        it('works with 5x1', function() {
          result = spiralTraversal([
                [1, 2, 3, 4, 5]
          ]);
          expect(result).to.deep.equal([1, 2, 3, 4, 5]);
        })

        it('works with 1x1', function() {
          result = spiralTraversal([
                [1]
          ]);
          expect(result).to.deep.equal([1]);
        })

        it('works empty array', function() {
          result = spiralTraversal([]);
          expect(result).to.deep.equal([]);
        });
    });
});
