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
var reverse = function (x) {
  // 1. (O(log|x|) O(1))(100 ms 39.3 MB)(73.00% 72.23%)
  // const multiplier = x < 0 ? -1 : 1;
  // let input = x * multiplier;
  // let rst = 0;
  // while (input > 0) {
  //   const remainder = input % 10;
  //   rst = rst * 10 + remainder;
  //   input = Math.floor(input / 10);
  // }
  // const ret = multiplier * rst;
  // if (ret < -(2 ** 31) || ret > 2 ** 31 - 1) return 0;
  // return ret;

  // 2. (O(log|x|) O(1))(92 ms 39.2 MB)(92.56% 77.42%)
  let ans = 0;
  const max = 2 ** 31;
  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    ans = ans * 10 + digit;
    if (ans < -max || ans > max - 1) return 0;
  }
  return ans;
};

// @lc code=end

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
