/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 1. dp (76 ms 37.7 MB)(89.49% 54.03%)
  const n = nums.length;
  if (n <= 2) return Math.max(...nums);
  let first = nums[0], second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};

// @lc code=end

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
