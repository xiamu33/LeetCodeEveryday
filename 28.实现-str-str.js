/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 1. 暴力解法 (96 ms 38.7 MB)(36.48% 49.68%)
  if (!needle) return 0;
  const m = haystack.length, n = needle.length;
  for (let i = 0; i <= m - n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
  return -1;

  // TODO 2. kmp算法
};

// @lc code=end

console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
