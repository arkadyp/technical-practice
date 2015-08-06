/*-------------------------------------------------------------------*/

var Sudoku = {};

function printBoard(board) {
    var str = '';
    for (var y = 0; y < 9; y++) {
        for (var x = 0; x < 9; x++) {
            str += board[y][x] + ' ';
            if ((x + 1) % 3 === 0) {
                str += '  '
            }
        }
        if ((y + 1) % 3 === 0) {
            str += '\n';
        }
        str += '\n';
    }
    console.log(str);
}

function findNextEmptyCell(board, x, y) {
    while (true) {
        if (board[y][x] === 0) {
            return [x, y];
        }
        else if (x === 8 && y === 8) {
            return null;
        }
        else if (x === 8) {
            x = 0;
            y += 1;
        }
        else {
            x += 1;
        }
    }
}

function isValidValue(posX, posY, value, board) {
    // check row / columns
    for (var i = 0; i < 9; i++) {
        if (board[posY][i] === value || board[i][posX] === value) return false;
    }

    // check subsquare
    var topX = Math.floor(posX / 3) * 3;
    var topY = Math.floor(posY / 3) * 3;
    for (var x = topX; x < topX + 3; x++) {
        for (var y = topY; y < topY + 3; y++) {
            if (board[y][x] === value) return false;
        }
    }

    return true;
}

function solve(board, x, y) {
    var emptyCell = findNextEmptyCell(board, x, y);
    if (!emptyCell) {
        return true;
    }

    x = emptyCell[0];
    y = emptyCell[1];

    // iterate through each possible value and attempt
    // to mark it in cell
    for (var i = 1; i <= 9; i++) {
        if (isValidValue(x, y, i, board)) {
            board[y][x] = i;
            if (solve(board, x, y)) {
                return true;
            }
            board[y][x] = 0;
        }
    }
    return false;
}

Sudoku.solve = function (board, shouldPrint) {
    if (shouldPrint) {
        printBoard(board);
        console.log('--------------------------------');
    }

    // copy board
    var solution = [];
    for (var i = 0; i < board.length; i++) {
        solution.push(board[i].slice());
    }

    solve(solution, 0, 0);
    if (shouldPrint) printBoard(solution);

    return solution
}

module.exports = Sudoku;