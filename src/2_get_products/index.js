// You have an array of integers, and for each index you want to 
// find the product of every integer except the integer at that index.
// 
// Write a function get_products_of_all_ints_except_at_index() that 
// takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]
// your function would return:

//   [84, 12, 28, 21]
// by calculating:

//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
// Do not use division in your solution.


// solution
// the product consists of 2 parts
// part 1, counting up from up to the index
// part 2, counting up from after the index
// cycle array 3x, once to record upwards, once downwards, once to fill

function product_at_every_index(arr) {
    var lastIndex = arr.length - 1;
    var rightProduct = [arr[0]];
    var leftProduct  = [];
    leftProduct[lastIndex] = arr[lastIndex];
    var result = [];

    // calculate before and after arrays
    for (let i = 1, j = lastIndex - 1; i < arr.length && j >= 0; i++, j--) {
        rightProduct[i] = rightProduct[i - 1] * arr[i];
        leftProduct[j] = leftProduct[j + 1] * arr[j];
    }

    var behind;
    var ahead;
    for (let i = 0; i < arr.length; i++) {
        behind = rightProduct[i - 1] === undefined ? 1 : rightProduct[i - 1] ;
        ahead = leftProduct[i + 1] === undefined ? 1 : leftProduct[i + 1];
        result.push(behind * ahead);
    }

    return result;
}

var result;
result = product_at_every_index([1, 2, 3, 4, 5]);
console.log(result);

result = product_at_every_index([1, 7, 3, 4]);
console.log(result);


