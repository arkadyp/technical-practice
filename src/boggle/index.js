var fs = require('fs');

function parseDictionary(filePath, cb) {
    fs.readFile(filePath, {encoding: 'utf8'}, function(err, data) {
        if (err) throw new Error(`Couldn't read file at ${filePath}`);
        data = data.replace(/\r\n/g, ' ');
        data = data.replace(/\n/g, ' ');
        cb(data.split(' '));
    });
}

/*--------------------------------------------------------------------------*/
function Trie(words) {
    this.root = {};
    words = words || [];
    words.forEach(this.insertWord.bind(this));
}

var IS_WORD = '*';

Trie.prototype.insertWord = function insertWord(word) {
    var node = this.root;
    var letter;

    for (var i = 0; i < word.length; i++) {
        letter = word[i];

        if (!node[letter]) {
            node[letter] = {};
        }
        node = node[letter];

        if (i === word.length - 1) {
            node[IS_WORD] = true;
        }
    }
}

Trie.prototype.lookup = function(word) {
    var node = this.root;
    var letter;
    for (var i = 0; i < word.length; i++) {
        letter = word[i];

        if (!node[letter]) return false;
        else node = node[letter];

        if (i === word.length - 1) {
            return !!node[IS_WORD];
        }
    }
}

Trie.prototype.pathExists = function(str) {
    var node = this.root;
    var letter;
    for (var i = 0; i < str.length; i++) {
        letter = str[i];

        if (!node[letter]) return false;
        else node = node[letter];

        if (i === str.length - 1) {
            if (!!node[IS_WORD]) {
                return str;
            }
            else {
                return true;
            }
        }
    }
}
/*--------------------------------------------------------------------------*/


function createTrie(words) {
    return new Trie(words);
}

var COUNT = 1;
function findWords(currentWord, board, trie, result, visited, xPos, yPos, path) {
    for (var y = -1; y <= 1; y++) {
        for (var x = -1; x <= 1; x++) {
            if (x === 0 && y === 0) continue;

            var newX = xPos + x;
            var newY = yPos + y;

            // in bounds of board and hasn't already been visited
            if (newX >= 0 && newX <= 3 && newY >= 0 && newY <= 3 && !visited['' + newX + newY]) {
                // test to see if the new string is a path in the trie
                // if a string is returned, the word is valid, if true is returned, its only a valid path
                var letter = board[newY][newX];
                var validPath = trie.pathExists(currentWord + letter);
                if (validPath) {
                    currentWord += letter;
                    visited['' + newX + newY] = true;
                    path.push('' + newX + newY);

                    if (typeof validPath === 'string') {
                        result.push([
                            COUNT++,
                            currentWord,
                            JSON.stringify(path)
                        ]);
                    }
                    findWords(currentWord, board, trie, result, visited, newX, newY, path);

                    currentWord = currentWord.slice(0, currentWord.length - 1);
                    path.pop();
                    visited['' + newX + newY] = false;
                }
            }
        }
    }
}

function solve(board, words) {
    var trie = new Trie(words);
    var result = [];
    var visited = {};
    var currentWord = '';

    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[0].length; x++) {
            visited['' + x + y] = true;
            findWords(board[y][x], board, trie, result, visited, x, y, ['' + x + y]);
            visited['' + x + y] = false;
        }
    }

    // remove duplicate words that occur from taking different paths
    var set = {};
    var unique = [];

    result.forEach(item => {
        if (!set[item[1]]) {
            unique.push(item[1]);
            set[item[1]] = true;
        }
    });
    unique.sort((a, b) => a > b ? 1 : -1);
    return unique;
}

module.exports = {
    parseDictionary: parseDictionary,
    createTrie: createTrie,
    solve: solve
};




// You have twenty-four hours from sending to complete this problem using JavaScript or Famo.us.
// Please email your solution to mei@famo.us.

// Given a (boggle) 4x4 board of letters, and a dictionary of valid words, 
// find all of the unique words you can make from the given board.  
// The board and the dictionary  of valid words
// are provided in the problem as board.js and dict.txt.
// You make a word by starting on a letter square (the first letter of your 
// word),  and moving one letter square left, right, up, down, or diagonally 
// (the second letter of your word), and continuing until your word is complete.
// You cannot land on the same square twice in a single word.
//
// For example, in the board below:
//
//     WELC
//     OMET
//     OTHE
//     GAME
//
// you could for the word WOO from the upper left square, GAME across the 
// bottom, or THEM from the middle four squares.  Longer words like THEME 
// exist, or even short words like ME or HA.

// The program's output, should be a sorted list of valid words and 
// should match the solution_output.txt provided if done correctly.   
// If it does not EXACTLY match the output (as in, an empty "diff"), 
// please indicate why.

// QUESTION A: Does your program output match solution_output.txt exactly?  If not, why not?




// Your answer may be more than one file but please indicate HERE how you would run it:
// QUESTION B:  Please note how this solution is to be run.  If you must open a 
// web page, run a set of shell commands, run "node index.js", or similar, 
// please indicate that in your answer.  These instructions should be 
// followed by an intelligent non-engineer.

// Additonally, consider the following questions and answer here:
// 1. Would your solution work if we expanded the board to 5x5?  6x6?  At what point do you think it would give out?
// 2. What are some other ways to implement your answer?  
// 3. For each of these, what is the time and space tradeoff for running this against another solution?
// 4. For each of these, is it more suited for a long-running server, or for a one-off script?  


