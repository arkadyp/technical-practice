/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and adds each value to an array, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as 
 * many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

function pushRow(start, end, result, arr) {
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            result.push(arr[i]);
        }
    }
    else {
        for (var i = start; i >= end; i--) {
            result.push(arr[i]);
        }
    }
}

function pushColumn(start, end, result, arr, columnIndex) {
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            result.push(arr[i][columnIndex]);
        }
    }
    else {
        for (var i = start; i >= end; i--) {
            result.push(arr[i][columnIndex]);
        }
    }
}

function spiralTraversal(input) {
    if (!input || input.length === 0 || input[0].length === 0) return [];

    var top = 0;
    var bottom = input.length - 1;
    var left = 0;
    var right = input[0].length - 1;

    var result = [];

    var direction = ['RIGHT', 'DOWN', 'LEFT', 'UP'];
    var index = 0;

    while (left <= right && top <= bottom) {
        switch (direction[index++ % direction.length]) {
            case 'RIGHT':
                pushRow(left, right, result, input[top++]);
                break;
            case 'DOWN':
                pushColumn(top, bottom, result, input, right--);
                break;
            case 'LEFT':
                pushRow(right, left, result, input[bottom--]);
                break;
            case 'UP':
                pushColumn(bottom, top, result, input, left++);
                break;
            default:
                throw new Error(`'${direction[index]}'' is not a valid direction.`)
        }
    }

    return result;
}

module.exports = spiralTraversal;