/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  // (128 ms 43.2 MB)
  const m = nums.length, n = nums[0].length;
  if (m * n !== r * c) return nums;
  const ans = Array.from({ length: r }).map(() => Array.from({ length: c }).fill(0));
  for (let i = 0; i < m * n; i++) {
    ans[i / c | 0][i % c] = nums[i / n | 0][i % n];
  }
  return ans;
};

// @lc code=end

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)); // [[1,2,3,4]]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)); // [[1,2],[3,4]]
console.log(matrixReshape([[1, 2], [3, 4]], 4, 1)); // [[1],[2],[3],[4]]
