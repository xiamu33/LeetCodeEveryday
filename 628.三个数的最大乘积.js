/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // 1. 排序 (152 ms 41.8 MB)
  // nums.sort((a, b) => b - a);
  // const n = nums.length
  // return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[n - 1] * nums[n - 2]);

  // 2. 线性扫描 (128 ms 41.2 MB)
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  let min1 = Infinity, min2 = Infinity;
  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

// @lc code=end

console.log(maximumProduct([1, 2, 3])); // 6
console.log(maximumProduct([1, 2, 3, 4])); // 24
console.log(maximumProduct([-1, -2, -3])); // -6
