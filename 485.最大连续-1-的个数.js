/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // (84 ms 40.7 MB)
  let ans = 0, p = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) continue;
    ans = Math.max(ans, i - p);
    p = i + 1;
  }
  ans = Math.max(ans, n - p);
  return ans;
};

// @lc code=end

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
