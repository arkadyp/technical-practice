var expect = require("chai").expect;
var assert = require("chai").assert;
var for_loop_sum = require('../es5/five_basic_problems').for_loop_sum;
var while_loop_sum = require('../es5/five_basic_problems').while_loop_sum;
var recursive_sum = require('../es5/five_basic_problems').recursive_sum;
var combine_lists = require('../es5/five_basic_problems').combine_lists;
var fibonacci_for_loop = require('../es5/five_basic_problems').fibonacci_for_loop;
var fibonacci_recursion = require('../es5/five_basic_problems').fibonacci_recursion;
var form_largest_number = require('../es5/five_basic_problems').form_largest_number;
var addition_subtraction_string = require('../es5/five_basic_problems').addition_subtraction_string;


describe("Five basic problems", function(){
    describe("should be able to take sum of a list", function() {
        var input = [1, 5, 67, -190, 5, 8, 2, 4];
        var sum = input.reduce((item, result) => item + result, 0);
        it('using a for loop', function() {
            expect(for_loop_sum(input)).to.equal(sum);
        });

        it('using a while loop', function() {
            expect(while_loop_sum(input)).to.equal(sum);
        });

        it('using recursion', function() {
            expect(recursive_sum(input)).to.equal(sum);
        });
    });

    describe('should be able to merge to lists', function() {
        var input1 = ['a', 'b', 'c'];
        var input2 = [1, 2, 3, 4, 5];
         it('should merge lists', function() {
            expect(combine_lists(input1, input2)).to.deep.equal(['a', 1, 'b', 2, 'c', 3, 4, 5]);
         });
    });

    describe('should be able to calc fibonacci sequence', function() {
        it('using a for loop', function() {
            expect(fibonacci_for_loop(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        });

        it('using recursion', function() {
            expect(fibonacci_recursion(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        });

        it('shouldnt take forever using recursion', function() {
            assert.isNumber(fibonacci_recursion(1000)[1000]);
        });
    });

    describe('should be able to form largest number given array of ints', function() {
        it ('should work with [50, 2, 1, 9]', function() {
            expect(form_largest_number([50, 2, 1, 9])).to.equal(95021);
        });

        it ('should work with [50, 2, 1, 90]', function() {
            expect(form_largest_number([50, 2, 1, 90])).to.equal(905021);
        });

        it ('should work with [50, 2, 1, 9, 90]', function() {
            expect(form_largest_number([50, 2, 1, 9, 90])).to.equal(9905021);
        });

        it ('should work with [50, 2, 1, 91, 90]', function() {
            expect(form_largest_number([50, 2, 1, 91, 90])).to.equal(91905021);
        });
    });

    describe('should be able to calculate addition/subtraction string', function() {
        it ('should find all ways to get to 100 with 1 through 9', function() {
            var result = addition_subtraction_string(100, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
            expect(result.length).to.equal(12)
        });
    })
})






