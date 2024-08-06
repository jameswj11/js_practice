/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 
Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'. */

/// MY CODE BELOW ///

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    const y_length = grid.length;
    const x_length = grid[0].length;

    let islandCount = 0;
    let m = 0;
    let n = 0;

    for (let i = 0; i < x_length; i++) {
        for (let j = 0; j < y_length; j++) {
            m = j;
            n = i;
            if (grid[m][n] === "1") {
                // we find an island, increase island count
                islandCount++;

                // move to all adjacent land tiles
                move(m, n, grid);
            };
        };
    };

    return islandCount;
};

function move(m, n, grid) {
    // check if out of bounds
    if ((m >= grid.length) || (m < 0) || (n >= grid[m].length) || (n < 0) || (grid[m][n] != '1')) {
        return;
    };

    // change tile so we don't count it again
    grid[m][n] = "X";

    // continue moving recursively around the island until we reach all land tiles
    move(m, (n - 1), grid); // north
    move((m+1), n, grid); // east
    move(m, (n+1), grid); // south
    move((m -1), n, grid); // west
}