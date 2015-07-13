function for_loop_sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function while_loop_sum(arr) {
    var index = 0;
    var sum = 0;
    while (index < arr.length) {
        sum += arr[index++];
    }
    return sum;
}

function recursive_sum(arr, index) {
    index = index || 0;
    if (index === arr.length - 1) {
        return arr[index];
    }
    else {
        return arr[index] + recursive_sum(arr, index + 1);
    }
}

function combine_lists(arr1, arr2) {
    var max_length = Math.max(arr1.length, arr2.length);
    var result = [];
    for (let i = 0; i < max_length; i++) {
        if (arr1[i] !== undefined) result.push(arr1[i]);
        if (arr2[i] !== undefined) result.push(arr2[i]);
    }
    return result;
}

function fibonacci_for_loop(count) {
    var result = [];
    for (let i = 0; i <= count; i++) {
        if (i < 2) {
            result.push(i);
        }
        else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
}

function fibonacci_recursion(count) {
    var memo = {};
    var result = [];

    var fib = function(n) {
        if (memo[n] !== undefined) {
            return memo[n];
        }
        else {
            if (n < 2) {
                result[n] = n;
                memo[n] = value;
                return n;
            }
            else {
                var value = fib(n - 1) + fib(n - 2);
                result[n] = value;
                memo[n] = value;
                return value;
            }
        }
    }

    fib(count);
    return result;
}

function form_largest_number(_ints) {
    
    // return number with higher first digit
        // if digits are equal, go to second digit
        // if one number doesn't have second digit, return 'shorter' number
    var sort_by_first_digit = function(_a, _b) {
        var a = '' + _a;
        var b = '' + _b;

        if (a[0] > b[0]) {
            return -1;
        }
        else if (a[0] < b[0]) {
            return 1;
        }
        else {
            if (a[1] === undefined) return -1;
            else if (b[1] === undefined) return 1;
            else {
                return sort_by_first_digit(Number(a.slice(1)), Number(b.slice(1)))
            }
        }
    }

    var numberStr =  _ints.slice()
                        .sort(sort_by_first_digit)
                        .reduce((str, item) => str + item, '');

    return +numberStr;
}

function addition_subtraction_string(target, range) {
    var result = [];

    var subroutine = function(currentTotal, index, str, value) {
        var value = value || range[index];
        if (index >= range.length - 1) {
            // console.log('--------------------------------');
            // console.log(index, range.length - 1);
            // console.log(`${str} ? ${value} => ${currentTotal}`);
            if (currentTotal + value === target) {
                str += `+${value}|`;
                return result.push(str);
            }
            else if (currentTotal - value === target) {
                str -= ` -${value}|`;
                return result.push(str)
            }
            else {
                // console.log(`${str} ? ${value} => ${currentTotal}`);
                return null;
            }
        }

        // try adding number
        subroutine(currentTotal + value, index + 1, str + `+${value}| `)

        // try subtracting number
        subroutine(currentTotal - value, index + 1, str + `-${value}| `)
        
        // concat
        var value = Number('' + value + range[index + 1]);
        subroutine(currentTotal, index + 1, str, value);
    }

    subroutine(target, 0, '');
    console.log('//////////////////////////////');
    console.log(result);
    console.log('//////////////////////////////');
    return result;
}

module.exports = {
    for_loop_sum: for_loop_sum,
    while_loop_sum: while_loop_sum,
    recursive_sum: recursive_sum,
    combine_lists: combine_lists,
    fibonacci_for_loop: fibonacci_for_loop,
    fibonacci_recursion: fibonacci_recursion,
    form_largest_number: form_largest_number,
    addition_subtraction_string: addition_subtraction_string
}


// Problem 1
// Write three functions that compute the sum of the numbers in
// a given list using a for-loop, a while-loop, and recursion.

// Problem 2
// Write a function that combines two lists by alternatingly taking
// elements. For example: given the two lists [a, b, c] and [1, 2, 3],
// the function should return [a, 1, b, 2, c, 3].

// Problem 3

// Write a function that computes the list of the first 100 Fibonacci 
// numbers. By definition, the first two numbers in the Fibonacci sequence
//  are 0 and 1, and each subsequent number is the sum of the previous two. 
//  As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 
//  8, 13, 21, and 34.

// Problem 4
// Write a function that given a list of non negative integers, arranges them
// such that they form the largest possible number. For example, 
// given [50, 2, 1, 9], the largest formed number is 95021.

// Update: Apparently this problem got a lot of people talking
// (although not as much as Problem 5 below.) You can click here to read my solution.

// Problem 5
// Write a program that outputs all possibilities to put + or - or nothing 
// between the numbers 1, 2, ..., 9 (in this order) such that the result is 
// always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.





