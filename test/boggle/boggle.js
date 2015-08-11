var expect = require('chai').expect;
var assert = require('chai').assert;
var Boggle = require('../../es5/boggle');

var DICTIONARY_PATH = __dirname + '/dict.txt';
var SOLUTION_PATH = __dirname + '/solution_output.txt';

describe('Boggle', function(done) {
    it('should export functions', function() {
        assert.isObject(Boggle, 'exports object')
        assert.isFunction(Boggle.solve, 'object has `solve` method');
        assert.isFunction(Boggle.parseDictionary, 'object has `parseDictionary` method');
        assert.isFunction(Boggle.createTrie, 'object has `createTrie` method');
    });

    it('should convert text file (dictionary) to an array of words', function(done) {
        Boggle.parseDictionary(DICTIONARY_PATH, function(words) {
            assert.isArray(words, 'text file was converted to an array of words');
            expect(words[8]).to.equal('AALS', 'array of words matches text file');
            done();
        });
    });

    it('should create a trie from an array of words', function() {
        var trie = Boggle.createTrie([
            'AA',
            'AARF',
            'ABA',
            'ABB',
            'CAT',
            'BAT',
            'BATTLE'
        ]);

        assert.isFunction(trie.lookup, 'trie has a lookup function');
        expect(trie.lookup('ABB')).to.equal(true, 'returns `true` if a word is in the trie');
        expect(trie.lookup('BATTLE')).to.equal(true, 'returns `true` if a word is in the trie');
        expect(trie.lookup('ZZZ')).to.equal(false, 'returns `false` if a word isn\'t in the trie');
    });

    it('should be able to solve boggle', function(done) {
        var board = [
            ['F', 'A', 'M', 'O'],
            ['U', 'S', 'I', 'N'],
            ['D', 'U', 'S', 'T'],
            ['R', 'I', 'E', 'S']
        ];

        Boggle.parseDictionary(DICTIONARY_PATH, function(words) {
            var solution = Boggle.solve(board, words);
            assert.isArray(solution, 'returns an array of words');
            expect(solution.length).to.equal(285, 'word count matches the solution_output.txt file');

            Boggle.parseDictionary(SOLUTION_PATH, function(expectedSolution) {
                expectedSolution.pop(); // pop off line break
                expect(solution).to.deep.equal(expectedSolution, 'words should match solution_output.txt file');
                done();
            });
        })
    });
});