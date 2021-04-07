/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  // 1. 二分法 (80 ms 39.1 MB)(91.34% 72.78%)
  const n = nums.length;
  if (n === 1) return nums[0] === target;
  let l = 0, r = n - 1;
  while (l <= r) {
    const mid = (l + r) / 2 | 0;
    if (nums[mid] === target) return true;
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      l++;
      r--;
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return false;
};

// @lc code=end

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false
