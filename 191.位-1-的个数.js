/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 1. 位运算 (88 ms 39.3 MB)(83.58% 21.85%)
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans += n & 1;
    n = n >> 1;
  }
  return ans;
};

// @lc code=end
