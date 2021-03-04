/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  // 1. dp (648 ms 40.4 MB)(9.70% 82.42%)
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return b[1] - a[1];
  });
  const len = envelopes.length;
  let ans = 1;
  const dp = Array.from({ length: len }).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

// @lc code=end

console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]])); // 3
console.log(maxEnvelopes([[1, 1], [1, 1], [1, 1]])); // 1
console.log(maxEnvelopes([[1, 1]])); // 1
