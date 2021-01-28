/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 1. 遍历 (108 ms 40 MB)
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum * 2 + nums[i] === sum) return i;
    leftSum += nums[i];
  }
  return -1;
};

// @lc code=end

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([0, 0, 0, 0, 1])); // 4
console.log(pivotIndex([0, 0, 1, 0, 0, 1])); // 3
