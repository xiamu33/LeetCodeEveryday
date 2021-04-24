/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // 1. dp (O(target*n) O(target))(80 ms 39.9 MB)(91.87% 14.63%)
  const dp = Array.from({ length: target + 1 }).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};

// @lc code=end

console.log(combinationSum4([1, 2, 3], 4)); // 7
