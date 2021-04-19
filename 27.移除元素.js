/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 1. 双指针 (84 ms 38.1 MB)(66.95% 28.41%)
  let l = 0, r = 0;
  while (r < nums.length) {
    if (nums[r] !== val) {
      nums[l++] = nums[r];
    }
    r++;
  }
  return nums.length = l;
};

// @lc code=end
