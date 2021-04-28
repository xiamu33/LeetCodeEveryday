/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  // 1. 双指针 (O(sqrt(c)) O(1))(96 ms 37.9 MB)(46.44% 61.09%)
  let l = 0, r = Math.sqrt(c) | 0;
  while (l <= r) {
    const sum = l ** 2 + r ** 2;
    if (sum === c) return true;
    if (sum < c) l++;
    else r--;
  }
  return false;
};

// @lc code=end

console.log(judgeSquareSum(5)); // true
console.log(judgeSquareSum(6)); // false
