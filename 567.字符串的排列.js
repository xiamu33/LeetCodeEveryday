/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 1. 滑动窗口 (156 ms 44 MB)
  // const n = s1.length, len = s2.length;
  // if (n > len) return false;
  // const cnt1 = Array.from({ length: 26 }).fill(0);
  // const cnt2 = Array.from({ length: 26 }).fill(0);
  // const getCharDiff = s => s.charCodeAt() - 'a'.charCodeAt();
  // for (let i = 0; i < n; i++) {
  //   cnt1[getCharDiff(s1[i])]++;
  //   cnt2[getCharDiff(s2[i])]++;
  // }
  // const cnt1Str = cnt1.toString();
  // if (cnt1Str === cnt2.toString()) return true;
  // for (let i = n; i < len; i++) {
  //   if (s2[i] === s2[i - n]) continue;
  //   cnt2[getCharDiff(s2[i])]++;
  //   cnt2[getCharDiff(s2[i - n])]--;
  //   if (cnt1Str === cnt2.toString()) return true;
  // }
  // return false;

  // 2. 滑动窗口 优化 (100 ms 40.9 MB)
  const n = s1.length, len = s2.length;
  if (n > len) return false;
  const cnt = Array.from({ length: 26 }).fill(0);
  const getCharDiff = s => s.charCodeAt() - 'a'.charCodeAt();
  for (let i = 0; i < n; i++) {
    cnt[getCharDiff(s1[i])]--;
    cnt[getCharDiff(s2[i])]++;
  }
  let diff = 0;
  for (const c of cnt) {
    if (c !== 0) diff++;
  }
  if (diff === 0) return true;
  for (let i = n; i < len; i++) {
    const x = getCharDiff(s2[i]), y = getCharDiff(s2[i - n]);
    if (x === y) continue;
    if (cnt[x]++ === 0) diff++;
    if (cnt[x] === 0) diff--;
    if (cnt[y]-- === 0) diff++;
    if (cnt[y] === 0) diff--;
    if (diff === 0) return true;
  }
  return false;
};

// @lc code=end

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
