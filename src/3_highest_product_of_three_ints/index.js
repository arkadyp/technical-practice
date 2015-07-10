// Given an array_of_ints, find the highest_product you can get from three of the integers.
// The input array_of_ints will always have at least three integers.

function greatest_product_of_three(arr) {
    if (arr.length < 3) {
        throw new Error (`
            Cannot calculate product of three integers because
            the length of the passed in array is ${arr.length}
        `);
    }

    var three_greatest = [arr[0], arr[1], arr[2]].sort();
    var three_lowest = three_greatest.slice();

    for (let i = 3; i < arr.length; i++) {
        let value = arr[i];
        if (value > three_greatest[0]) {
            three_greatest[0] = value;
            three_greatest.sort();
        }
        else if (value < three_lowest[2]) {
            three_lowest[2] = value;
            three_lowest.sort();
        }
    }

    // If all negative, return product of greatest 3 numbers
    if (three_greatest[2] < 0) {
        return three_greatest.reduce((value, product) => value * product, 1);
    }
    else {
        return three_greatest[2] * Math.max(
                                        three_greatest[0] * three_greatest[1],
                                        three_lowest[0] * three_lowest[1]
                                    );
    }


    return 0;
}

module.exports = greatest_product_of_three;
