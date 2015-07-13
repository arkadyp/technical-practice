function make_change(total, _denom) {
    // sort denominations in ascending order
    var denominations = _denom.slice().sort((a, b) => a < b);

    var count = 0;
    function subroutine(running_total, index) {
        if (running_total === total) {
            count++;
            return;
        }
        else if (running_total > total) {
            return;
        }

        for (let i = index; i < denominations.length; i++) {
            let value = denominations[i];
            subroutine(running_total + value, i);
        }
    }

    subroutine(0, 0);
    return count;
}

module.exports = make_change;

// try to recursive, memoized

// try the bottom up approach