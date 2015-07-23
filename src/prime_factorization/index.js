function smallestPrimeFactor(num) {
    if (num % 2 === 0) {
        return 2;
    }

    var root = Math.sqrt(num);
    for (var i = 3; i <= root; i += 2) {
        if (num % i === 0) return i;
    }
    return num;
}

function primeFactors(num) {
    var result = [];
    while (num > 1) {
        var smallestPrime = smallestPrimeFactor(num);
        result.push(smallestPrime);
        num /= smallestPrime;
    }
    return result;
}

function largestPrimeFactor(num) {
    if (num < 2) return null;

    var factor = 2;
    while (num > factor) {
        if (num % factor === 0) {
            num /= factor;
        }
        else {
            factor++;
        }
    }

    return factor;
}

module.exports = {
    primeFactors: primeFactors,
    largestPrimeFactor: largestPrimeFactor
}