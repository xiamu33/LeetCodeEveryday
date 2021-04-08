/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 1. 二分查找 (84 ms 37.2 MB)(64.85% 99.93%)
  const n = nums.length;
  if (n === 1) return nums[0];
  let l = 0, r = n - 1;
  while (l < r) {
    const mid = (l + r) / 2 | 0;
    if (nums[mid] > nums[n - 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l];
};

// @lc code=end

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11
