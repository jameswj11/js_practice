/* You are given an integer array coins representing coins of different denominations 
and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 
Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104 */

///////////////////////
/// SOLUTION BELOW ///

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) { 
    // first create array with coins at each value up to amount
    let allCoins = new Array(amount + 1).fill(Number.MAX_VALUE); 
    allCoins[0] = 0; // first amount is 0 which requires 0 coins

    let currentAmount;
    let coinValue;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            currentAmount = i; 
            coinValue = coins[j];

            if (currentAmount - coinValue >= 0) {
                // update number of coins needed
                allCoins[i] = Math.min(allCoins[i], 1 + allCoins[i - coins[j]]); 
            };
        };
    };

    if (allCoins[amount] !== (Number.MAX_VALUE)) { // if there is no remainder, return last value
        return allCoins[amount];
    } else {
        return -1; // else, perfect change not possible
    }
};