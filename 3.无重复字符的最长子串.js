/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};
  let maxLen = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    const cacheIndex = map[s[i]];
    if ((cacheIndex || cacheIndex === 0) && cacheIndex >= j) {
      const len = i - j;
      if (len > maxLen) maxLen = len;
      j = cacheIndex + 1;
    }
    if (i === s.length - 1) {
      const len = i + 1 - j;
      if (len > maxLen) maxLen = len;
    }
    map[s[i]] = i;
  }
  return maxLen;
};

// @lc code=end

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("dvdfe")); // 4
console.log(lengthOfLongestSubstring("dvedfe")); // 4
console.log(lengthOfLongestSubstring("abdceafhgcbdazx")); // 9
