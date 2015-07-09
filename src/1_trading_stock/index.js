// Writing coding interview questions hasn't made me rich. Maybe trading Apple stocks will.
// I have an array stock_prices_yesterday where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.

// Write an efficient algorithm for computing the best profit I could have made from 1 purchase 
// and 1 sale of 1 Apple stock yesterday.

// No "shorting"—you must buy before you sell. You may not buy and sell in 
// the same time step (at least 1 minute must pass).

function calculate_max_profit(price_data) {
    if (price_data.length < 2) {
        throw new Error('There must be at least 2 prices in order to calculate a profit.');
    }

    var max_profit = price_data[1] - price_data[0];
    var min_price = price_data[0];
    var potential_profit;
    var price;
    for (var i = 1; i < price_data.length; i++) {
        price = price_data[i];
        potential_profit = price - min_price;
        max_profit = Math.max(max_profit, potential_profit);
        min_price = Math.min(price, min_price);
    }

    console.log(max_profit);
    return max_profit;
}

var prices = [100, 90, 91, 104, 110, 100, 103, 101, 87, 90, 30]; // 20, 90 --> 110
calculate_max_profit(prices);

var prices = [20, 16, 10, 9, 8, 2]; // -1, 10 --> 9
calculate_max_profit(prices);