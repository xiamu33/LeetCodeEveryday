/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  // 1. (108 ms 40.8 MB)
  let ret = 0;
  const getCharDiff = c => c.charCodeAt() - 'a'.charCodeAt();
  for (let t = 1; t <= 26; t++) {
    let l = 0, r = 0;
    const cnt = new Array(26).fill(0);
    let tot = 0;
    let less = 0;
    while (r < s.length) {
      cnt[getCharDiff(s[r])]++;
      if (cnt[getCharDiff(s[r])] === 1) {
        tot++;
        less++;
      }
      if (cnt[getCharDiff(s[r])] === k) less--;

      while (tot > t) {
        cnt[getCharDiff(s[l])]--;
        if (cnt[getCharDiff(s[l])] === k - 1) less++;
        if (cnt[getCharDiff(s[l])] === 0) {
          tot--;
          less--;
        }
        l++;
      }
      if (less == 0) ret = Math.max(ret, r - l + 1);
      r++;
    }
  }
  return ret;

  // TODO 2.
};

// @lc code=end

console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5
