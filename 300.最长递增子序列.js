/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 1. dp (220 ms 39.4 MB)(32.33% 60.18%)
  const len = nums.length;
  const dp = Array.from({ length: len }).fill(1);
  let ans = 0;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

// @lc code=end

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
