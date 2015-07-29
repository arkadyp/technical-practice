/*-----------------------------------------------------------------------------------*/
// QUICK SORT
// [https://gist.github.com/paullewis/1981455] for reference
/*-----------------------------------------------------------------------------------*/

function swap (arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot];
    let divider = left;

    swap(arr, pivot, right);

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, divider);
            divider++;
        }
    }

    swap(arr, divider, right);
    return divider;
}

function quickSort(arr, left, right) {
    if (left === undefined) left = 0;
    if (right === undefined) right = arr.length - 1;

    if (left > right) return; // base case, no partitioning needs to be done

    var pivot = left; // can be optimized be grabbing median value
    var newPivot = partition(arr, pivot, left, right);

    quickSort(arr, left, newPivot - 1);
    quickSort(arr, newPivot + 1, right);

    return arr;
}

/*-----------------------------------------------------------------------------------*/
// MERGE SORT
// [https://gist.github.com/paullewis/1982121] for reference
/*-----------------------------------------------------------------------------------*/

function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    if (leftIndex < left.length) {
        result = result.concat(left.slice(leftIndex));
    }
    else if (rightIndex < right.length) {
        result = result.concat(right.slice(rightIndex));
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    var midpoint = Math.floor(arr.length / 2);
    var left = arr.slice(0, midpoint);
    var right = arr.slice(midpoint, right);

    return merge(mergeSort(left), mergeSort(right));
}

module.exports = {
    quickSort: quickSort,
    mergeSort: mergeSort
}