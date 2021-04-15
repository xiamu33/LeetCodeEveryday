/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 1. dp (76 ms 38.1 MB)(90.75% 21.59%)
  const n = nums.length;
  if (n <= 2) return Math.max(...nums);
  const robRange = (start, end) => {
    let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
      const temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
    }
    return second;
  }
  return Math.max(robRange(0, n - 2), robRange(1, n - 1));
};

// @lc code=end

console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([1, 3, 1, 3, 100])); // 103
