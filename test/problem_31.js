var expect = require("chai").expect;
var assert = require("chai").assert;
var recursiveStringPermutations = require('../es5/31_string_permutations').recursive;
var iterativeStringPermutations = require('../es5/31_string_permutations').iterative;

const EXPECTED_RESULTS = {
    'abc' : [
        'abc',
        'acb',
        'bac',
        'bca',
        'cab',
        'cba'
    ],
    'dogs' : [
        'dogs', 'sgod', 'gsod', 'ogsd',
        'dosg', 'sgdo', 'gsdo', 'ogds',
        'dsgo', 'sdgo', 'gdso', 'osdg',
        'dsog', 'sdog', 'gdos', 'osgd',
        'dgso', 'sodg', 'gods', 'odgs',
        'dgos', 'sogd', 'gosd', 'odsg'
    ]
}

describe("Problem 31: recursive string permutations", function() {
    describe('it should work recursively', function() {
        it('should export a function', function(){
            assert.isFunction(recursiveStringPermutations, 'exports a function');
        });

        it('should return an array of all permutations', function(){
            var result, expectedResult;
            result = recursiveStringPermutations('abc').sort();
            expectedResult = EXPECTED_RESULTS['abc'].sort();
            expect(result).to.deep.equal(expectedResult, 'works with "abc"');

            result = recursiveStringPermutations('dogs').sort();
            expectedResult = EXPECTED_RESULTS['dogs'].sort();
            expect(result).to.deep.equal(expectedResult, 'works with "dogs"');
        });
    });

    describe('it should work iteratively', function() {
        it('should export a function', function(){
            assert.isFunction(iterativeStringPermutations, 'exports a function');
        });

        it('should return an array of all permutations', function(){
            var result, expectedResult;
            result = iterativeStringPermutations('abc').sort();
            expectedResult = EXPECTED_RESULTS['abc'].sort();
            expect(result).to.deep.equal(expectedResult, 'works with "abc"');

            result = iterativeStringPermutations('dogs').sort();
            expectedResult = EXPECTED_RESULTS['dogs'].sort();
            expect(result).to.deep.equal(expectedResult, 'works with "dogs"');
        });
    });
});
