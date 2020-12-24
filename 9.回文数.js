/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const str = x.toString();
  const len = Math.floor(str.length / 2);
  let j = str.length - 1;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[j]) return false;
    j--;
  }
  return true;
};

// @lc code=end
