/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const len = nums.length;
  const ret = Array.from({ length: len });
  let index = len - 1;
  let si = 0;
  let ei = len - 1;
  while (index >= 0) {
    const prev = nums[si] ** 2;
    const next = nums[ei] ** 2;
    if (si === ei) {
      ret[index--] = prev;
    } else if (prev === next) {
      ret[index--] = prev;
      ret[index--] = next;
      si++
      ei--;
    } else if (prev > next) {
      ret[index--] = prev;
      si++;
    } else {
      ret[index--] = next;
      ei--;
    }
  }
  return ret;
};

// @lc code=end

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
