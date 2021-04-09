/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 1. 二分查找 (84 ms 39.3 MB)(73.30% 9.12%)
  const n = nums.length;
  if (n === 1) return nums[0];
  let l = 0, r = n - 1;
  while (l < r) {
    const mid = (l + r) / 2 | 0;
    if (nums[mid] === nums[r]) {
      r--;
    } else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l];
};

// @lc code=end

console.log(findMin([1, 3, 5])); // 1
console.log(findMin([2, 2, 2, 0, 1])); // 0
