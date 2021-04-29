/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  // 1. dp (O(n^2) O(n^2))(3096 ms 73.6 MB)(5.00% 13.75%)
  const n = stones.length;
  const dp = Array.from({ length: n }).map(() => Array.from({ length: n + 1 }).fill(false));
  dp[0][1] = true;
  for (let i = 0; i < n; i++) {
    let status = false;
    for (let j = i - 1; j >= 0; j--) {
      const diff = stones[i] - stones[j];
      if (diff > i) break;
      if (dp[j][diff]) {
        dp[i][diff - 1] = true;
        dp[i][diff] = true;
        dp[i][diff + 1] = true;
        status = true;
      }
    }
    if (i === n - 1 && !status) return false;
  }
  return true;
};

// @lc code=end

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17])); // true
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11])); // false
