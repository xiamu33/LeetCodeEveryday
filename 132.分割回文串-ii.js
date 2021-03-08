/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  // 动态规划 (340 ms 58.6 MB)(39.13% 13.04%)
  const n = s.length;
  const memo = Array.from({ length: n }).map(() => Array.from({ length: n }).fill(true));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      memo[i][j] = memo[i + 1][j - 1] && (s[i] === s[j]);
    }
  }
  const f = Array.from({ length: n }).fill(Infinity);
  for (let i = 0; i < n; i++) {
    if (memo[0][i]) {
      f[i] = 0;
    } else for (let j = 0; j < i; j++) {
      if (memo[j + 1][i]) {
        f[i] = Math.min(f[i], f[j] + 1);
      }
    }
  }
  return f[n - 1];
};

// @lc code=end

console.log(minCut("aab")); // 1
