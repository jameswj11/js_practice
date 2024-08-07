/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping 
intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104 */

///////////////////////
/// SOLUTION BELOW ///

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    // sort intervals by first number
    intervals.sort((a, b) => a[0] - b[0]);

    if (intervals.length == 1) return intervals; // return if only one interval
    let previous = intervals[0]; // start at first item
    let mergedArr = [];
    
    for (let i = 1; i < intervals.length; i++) {
        // start at next interval and check for overlap with last
        let current = intervals[i];
        if (current[0] <= previous[1]) {
            previous[1] = Math.max(current[1], previous[1]) // reassign end to largest end number
        } else {
            mergedArr.push(previous); // nothing to do, add last interval
            previous = current; // reassign last value to current
        };
    };

    mergedArr.push(previous); // adds final interval
    return mergedArr;
};