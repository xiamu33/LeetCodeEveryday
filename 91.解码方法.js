/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // 1. dp (100 ms 38.8 MB)(28.55% 91.25%)
  /* 
  dp[i+1] = s[i] === 0 ? 0 : dp[i]
    + (s[i-1] === 1 || (s[i-1] === 2 && s[i] <= 6)) ? dp[i-1] : 0
  */
  // const n = s.length;
  // const dp = Array.from({ length: n + 1 }).fill(0);
  // dp[0] = 1;
  // for (let i = 0; i < n; i++) {
  //   dp[i + 1] = s[i] === '0' ? 0 : dp[i];
  //   if (i > 0 && (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6'))) {
  //     dp[i + 1] += dp[i - 1];
  //   }
  // }
  // return dp[n];

  // 2. dp优化 (84 ms 38.8 MB)(83.00% 92.41%)
  const n = s.length;
  let first = 0, second = 1, ans = 0;
  for (let i = 0; i < n; i++) {
    ans = s[i] === '0' ? 0 : second;
    if (i > 0 && (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6'))) {
      ans += first;
    }
    first = second;
    second = ans;
  }
  return ans;
};

// @lc code=end

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
