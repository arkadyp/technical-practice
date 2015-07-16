function two_movies_match_flight_length(flight_time, times) {
    var result = false;
    var matches = {};
    for (let i = 0; i < times.length; i++) {
        if (matches[times[i]]) {
            result = true;
            break;
        }
        else {
            let compliment = flight_time - times[i];
            matches[compliment] = true;
        }
    }
    return result;
}

module.exports = two_movies_match_flight_length;