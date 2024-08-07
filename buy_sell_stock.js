/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future 
to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104 */

/////////////////////////////////
/// OPTIMIZED SOLUTION BELOW ///
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let maxProfit = 0;
    let currProfit = 0;
    let lowPrice = prices[0]; // first price is initial lowest price

    // find the next lowest price
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowPrice) {
            // reset lowest price
            lowPrice = prices[i];
        } else {
            // if current price is higher than lowest, calculate profit
            currProfit = prices[i] - lowPrice;
            if (currProfit > maxProfit) {
                maxProfit = currProfit; // set new max profit
            };
        };
    };
    return maxProfit;
};

/// BRUTE FORCE SOLUTION BELOW ///

var maxProfit = function(prices) {
    let maxProfit = 0;
    let currProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            // only run if current price is below next
            if (prices[i] <= prices[j]) {
                // calculate profit
                currProfit = prices[j] - prices[i];
                // check against max profit and reassign
                if (currProfit >= maxProfit) {
                    maxProfit = currProfit;
                };
            };
        };
    };
    return maxProfit;
};