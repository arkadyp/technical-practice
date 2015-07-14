function get_acsending_array(arr) {
    return arr.slice(0).sort((a, b) => a - b);
}

function make_change_iterative(total, _denom) {
    var denominations = get_acsending_array(_denom);
    var possibilities = [1]; // base case --> one way to make 0

    for (let i = 0; i < denominations.length; i++) {
        let denomination = denominations[i];
        for (let amount = 1; amount <= total; amount++) {
            possibilities[amount] = possibilities[amount] || 0;
            
            if (amount >= denomination) {
                possibilities[amount] += possibilities[amount - denomination];
            }
        }
    }

    return possibilities[total];
}

function make_change_recursive(total, _denom) {
    var denominations = get_acsending_array(_denom);
    var memo = {};

    var count_possibilities = function(amount_left, index) {
        var key = JSON.stringify([amount_left, index]);
        if (memo[key] !== undefined) {
            return memo[key];
        }

        if (amount_left === 0) {
            return 1;
        }
        else if (amount_left < 0) {
            return 0;
        }
        if (index > denominations.length - 1) {
            return 0;
        }

        var possibilities = 0;
        var denomination = denominations[index];
        while (amount_left >= 0) {
            possibilities += count_possibilities(amount_left, index + 1);
            amount_left -= denomination;
        }
        memo[key] = possibilities;
        return possibilities;
    }

    return count_possibilities(total, 0);
}


module.exports = make_change_recursive;
