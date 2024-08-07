/* Given an integer array nums, return the largest sum among its subarrays.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104 */

//////////////////////////////////////////////////////////
/// OPTIMIZED SOLUTION USING KADANE'S ALGORITHM BELOW ///

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxhSubArray = function(nums) {
    // start largest sums at first item in array
    let largestSum = nums[0];
    let currentSum = nums[0];

    // iterate from second number
    for (let i = 1; i < nums.length; i++) {
        // check if current item is larger than sum of previous subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // if larger than largest sum, reassign
        if (currentSum > largestSum) {
            largestSum = currentSum;
        };
    };
    return largestSum;
};

///////////////////////////////////
/// BRUTE FORCE SOLUTION BELOW ///

var maxSubArray = function(nums) {
    // start at beginning, increase index each iteration and look for sum
    let largestSum = nums[0];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            if (currentSum > largestSum) {
                largestSum = currentSum;
            };
        };
    };
    return largestSum;
};