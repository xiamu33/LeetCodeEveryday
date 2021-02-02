/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // 1. 双指针 (104 ms 39.4 MB)
  let left = 0, right = 0;
  const charCount = Array.from({ length: 26 }).fill(0);
  const charCodeA = 'A'.charCodeAt();
  while (right < s.length) {
    charCount[s[right].charCodeAt() - charCodeA]++;
    const maxLen = Math.max(...charCount);
    if (right - left + 1 - maxLen > k) {
      charCount[s[left].charCodeAt() - charCodeA]--;
      left++;
    }
    right++;
  }
  return right - left;
};

// @lc code=end

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("AEABCADBABA", 2)); // 4
