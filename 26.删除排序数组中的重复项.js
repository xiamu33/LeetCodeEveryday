/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 1. 双指针 (76 ms 40.1 MB)(99.88% 55.73%)
  const n = nums.length;
  if (n <= 1) return n;
  let l = 1, r = 1;
  while (r < n) {
    if (nums[l - 1] !== nums[r]) {
      nums[l++] = nums[r];
    }
    r++;
  }
  return nums.length = l;
};

// @lc code=end
