/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 1. 二分法 (88 ms 39 MB)(55.88% 39.51%)
  const n = nums.length;
  if (n === 1) return nums[0] === target ? 0 : -1;
  let l = 0, r = n - 1;
  if (nums[l] === target) return l;
  if (nums[r] === target) return r;
  while (l <= r) {
    const mid = (l + r) / 2 | 0;
    if (nums[mid] === target) return mid;
    if (nums[0] <= nums[mid]) {
      if (nums[0] < target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (nums[mid] < target && target < nums[n - 1]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
};

// @lc code=end

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
