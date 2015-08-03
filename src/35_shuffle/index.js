function swap(arr, index1, index2) {
    var temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}

function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
        var random_pos = Math.floor(Math.random() * (arr.length - i)) + i;
        swap(arr, i, random_pos);
    }
}

module.exports = shuffle;