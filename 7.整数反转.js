/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const multiplier = x < 0 ? -1 : 1;
  let input = x * multiplier;
  let rst = 0;
  while (input > 0) {
    const remainder = input % 10;
    rst = rst * 10 + remainder;
    input = Math.floor(input / 10);
  }
  const ret = multiplier * rst;
  if (ret < -(2 ** 31) || ret > 2 ** 31 - 1) return 0;
  return ret;
};

// @lc code=end
