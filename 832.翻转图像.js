/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  // (88 ms 39.9 MB)
  const m = A.length, n = A[0].length;
  const ans = Array.from({ length: m }).map(() => Array.from({ length: n }));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = 1 - A[i][n - j - 1];
    }
  }
  return ans;
};

// @lc code=end

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage(
  [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
)); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
