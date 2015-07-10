var expect = require("chai").expect;
var greatest_product_of_three = require('../es5/3_highest_product_of_three_ints/index');

describe("Problem 3: Greatest product of three integers", function(){
    it('should export a function', function() {
        expect(typeof(greatest_product_of_three)).to.equal('function')
    });

    it('should return a number', function() {
        expect(typeof greatest_product_of_three([1,2,3])).to.equal('number');
    });

    it('should throw an error if the array has less than 3 elements', function() {
        expect(greatest_product_of_three.bind(null, [2, 3])).to.throw(Error);
    });

    describe('should return the highest product', function() {
        it('should work with three positive integers', function(){
            expect(greatest_product_of_three([4, 1, 1, 1, 2, 3])).to.equal(4 * 3 * 2);
        });

        it('should work with 3 negative integers', function(){
            expect(greatest_product_of_three([-4, -1, 0, 7, 9])).to.equal(-4 * -1 * 9);
        });

        it('should work with 2 negative integers', function(){
            expect(greatest_product_of_three([-4, -1, 0, 7, 9])).to.equal(-4 * -1 * 9);
        });

        it('should work with 1 negative integers', function(){
            expect(greatest_product_of_three([-4, 1, 0, 7, 9])).to.equal(1 * 7 * 9);
        });

        it('should work with 0', function(){
            expect(greatest_product_of_three([-4, -1, -6, -7, -9])).to.equal(-1 * -4 * -6);
        });
    });
});