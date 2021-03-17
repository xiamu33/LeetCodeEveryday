/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // 1. dp (112 ms 41.5 MB)(21.18% 18.82%)
  const m = s.length, n = t.length;
  const dp = Array.from({ length: m + 1 }).map(() => Array.from({ length: n + 1 }).fill(0));
  for (let i = 0; i < m + 1; i++) {
    dp[i][n] = 1;
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }
  return dp[0][0];
};

// @lc code=end

console.log(numDistinct("rabbbit", "rabbit")); // 3
console.log(numDistinct("babgbag", "bag")); // 5
