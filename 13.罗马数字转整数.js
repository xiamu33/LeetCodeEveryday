/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let sum = 0;
  const len = s.length;
  let preNum = hashRoman[s.charAt(0)];
  for (let i = 1; i < len; i++) {
    const curNum = hashRoman[s.charAt(i)];
    if (curNum <= preNum) sum += preNum;
    else sum -= preNum;
    preNum = curNum;
  }
  sum += preNum;
  return sum;
};

const hashRoman = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

// @lc code=end
