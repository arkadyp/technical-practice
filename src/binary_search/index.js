function binary_search_iterative(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start >= 0 && start <= end && end <= arr.length - 1) {
        let mid = Math.floor((start + end) / 2);
        let value = arr[mid];

        if (value === target) {
            return true;
        }
        else if (target < value) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return false;
}

function binary_search_recursive(arr, target, start, end) {
    if (start === undefined) start = 0;
    if (end === undefined) end = arr.length - 1;

    if (start < 0 || end > arr.length - 1 || start > end) {
        return false;
    }

    var midpoint = Math.floor((start + end) / 2);
    var value = arr[midpoint];

    if (target === value) {
        return true;
    }
    else if (target < value) {
        return binary_search_recursive(arr, target, start, midpoint - 1);
    }
    else {
        return binary_search_recursive(arr, target, midpoint + 1, end);
    }
}

module.exports = binary_search_recursive;