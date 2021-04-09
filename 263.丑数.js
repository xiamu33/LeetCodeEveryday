/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // 1. 迭代 (96 ms 38.8 MB)(73.90% 99.02%)
  if (n <= 0) return false;
  if (n === 1) return true;
  for (const div of [2, 3, 5]) {
    while (n % div === 0) {
      n /= div;
    }
  }
  return n === 1;
};

// @lc code=end

console.log(isUgly(6)); // true
console.log(isUgly(14)); // true
