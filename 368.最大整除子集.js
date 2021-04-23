/*
 * @lc app=leetcode.cn id=368 lang=javascript
 *
 * [368] 最大整除子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  // 1. dp (O(n^2) O(n))(116 ms 39.7 MB)(68.75% 96.88%)
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const dp = Array.from({ length: n }).fill(1);
  let maxSize = 1, maxVal = nums[0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    if (dp[i] > maxSize) {
      maxSize = dp[i];
      maxVal = nums[i];
    }
  }
  if (maxSize === 1) return [nums[0]];
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === maxSize && maxVal % nums[i] === 0) {
      ans.push(nums[i]);
      maxSize--;
      maxVal = nums[i];
    }
  }
  return ans;
};

// @lc code=end

console.log(largestDivisibleSubset([1, 2, 3])); // [1,3]
console.log(largestDivisibleSubset([4, 8, 10, 240])); // [4,8,240]
