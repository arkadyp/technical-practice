var expect = require("chai").expect;
var assert = require("chai").assert;
var Sorting = require('../es5/sorting');

function getRandomArray(size) {
    var arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 200 - 100))
    }
    return arr;
}
function sortNumbers(a, b) { return a - b};

describe("Should know how to implement sorting algorithms", function() {
    var arr;
    var sorted_arr;
    beforeEach(function(){
        arr = getRandomArray(7);
        sorted_arr = arr.slice().sort(sortNumbers);
    });

    describe('should know how to QuickSort', function(){
        it('should export a function', function(){
            assert.isFunction(Sorting.quickSort, 'exports a function');
        });

        it('should sort', function() {
            expect(Sorting.quickSort(arr)).to.deep.equal(sorted_arr);
        });
    });

    describe('should know how to MergeSort', function(){
        it('should export a function', function(){
            assert.isFunction(Sorting.mergeSort, 'exports a function');
        });

        it('should sort', function() {
            expect(Sorting.mergeSort(arr)).to.deep.equal(sorted_arr);
        });
    });
});