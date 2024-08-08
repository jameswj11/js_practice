/* Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters. */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t) {
    const str = s; 
    const tgt = t;
    const charMap = {}; // create a map to count number of each character in tgt

    if (tgt.length > str.length) return ''; // if tgt is longer than our str then answer not possible

    for (let char of tgt) {
        charMap[char] = (charMap[char] || 0) + 1; // add 1 for each occurence of each character in tgt
    };

    // assign pointers to window
    let left = 0; 
    let right = 0;
    let numCharsNeeded = Object.keys(charMap).length; // chars of tgt still left to match in str
    let substring = ''; // return value

    while (right < str.length) { // while we expand the right side of window
        const rightChar = str[right]; 
        charMap[rightChar]--; // subtract one instance of each matching char as we expand right side of window

        if (charMap[rightChar] === 0) { 
            numCharsNeeded--; // found all instances of that char, need less matching chars
        };

        while (numCharsNeeded === 0) { // we found a match by expanding right side, now we trim the left side of our window
            const leftChar = str[left];
            if (!substring || substring.length > right - left + 1) { 
                // if there is no substring, or it's longer than our current window, reassign it
                // +1 is to account for string.slice() method below
                substring = str.slice(left, right + 1);
            };

            if (charMap[leftChar] === 0) {
                // need to add characters to left side to continue our loop
                numCharsNeeded++;
            };

            charMap[leftChar]++;
            left++;
        };

        right++;
    };
    return substring;
};