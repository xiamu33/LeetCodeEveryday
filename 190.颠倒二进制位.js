/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // 1. 左移右移 (96 ms 39.7 MB)(65.50% 10.46%)
  // let ans = 0, count = 0;
  // while (n) {
  //   ans = (ans << 1) + (n & 1);
  //   n = n >>> 1;
  //   count++;
  // }
  // ans = ans << 32 - count;
  // return ans >>> 0;

  // 2. 逐位颠倒 (92 ms 39.4 MB)(81.47% 61.65%)
  // let ans = 0;
  // for (let i = 0; i < 32 && n > 0; i++) {
  //   ans = ans | (n & 1) << (31 - i);
  //   n = n >>> 1;
  // }
  // return ans >>> 0;

  // 3. 分治 (88 ms 39.6 MB)(91.19% 21.47%)
  const M1 = 0x55555555; // 01010101010101010101010101010101
  const M2 = 0x33333333; // 00110011001100110011001100110011
  const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
  const M8 = 0x00ff00ff; // 00000000111111110000000011111111

  n = n >>> 1 & M1 | (n & M1) << 1;
  n = n >>> 2 & M2 | (n & M2) << 2;
  n = n >>> 4 & M4 | (n & M4) << 4;
  n = n >>> 8 & M8 | (n & M8) << 8;
  return (n >>> 16 | n << 16) >>> 0;
};

// @lc code=end

console.log(reverseBits(43261596)); // 964176192
console.log(reverseBits(4294967293)); // 3221225471
