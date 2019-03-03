// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    if (currency <= 0) {
        return {};
    }
    
    const coins = new Map(
        [['H', 50],
        ['Q', 25],
        ['D', 10],
        ['N', 5],
        ['P', 1]]
    );

    let change = {};



    return change;
}
    