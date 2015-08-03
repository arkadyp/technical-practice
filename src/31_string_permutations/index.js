// Write a recursive function for generating all permutations of an input string. Return them as an array.
// Don't worry about duplicates—assume every character is unique.

// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// Your function can have loops—it just needs to also be recursive.

function removeLetter(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

function string_permutations_recursive(str, result, permutation, remainingLetters) {
    if (!result) result = [];
    if (!remainingLetters) remainingLetters = str;
    if (!permutation) permutation = '';

    if (permutation.length === str.length) {
        return result.push(permutation);;
    }
    else {
        for (let i  = 0; i < remainingLetters.length; i++) {
            let currentPermutation = permutation;
            currentPermutation += remainingLetters[i];
            string_permutations_recursive(str, result, currentPermutation, removeLetter(remainingLetters, i));
        }
        return result;
    }
}


function add_to_stack (stack, currentStr, letters) {
    for (let i = 0; i < letters.length; i++) {
        stack.push({
            permutation: currentStr + letters[i],
            letters: removeLetter(letters, i)
        });
    }
}

function string_permutations_iterative(str) {
    var result = [];
    var currentPermutation = '';

    var stack = [];
    add_to_stack(stack, '', str);

    while (stack.length) {
        let currentItem = stack.pop();
        let currentStr = currentItem.permutation;
        if (currentStr.length === str.length) {
            result.push(currentStr);
        }
        else {
            add_to_stack(stack, currentStr, currentItem.letters);
        }
    }

    return result;
}

module.exports = {
    recursive: string_permutations_recursive,
    iterative: string_permutations_iterative
}