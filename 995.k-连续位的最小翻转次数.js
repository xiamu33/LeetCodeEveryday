/*
 * @lc app=leetcode.cn id=995 lang=javascript
 *
 * [995] K 连续位的最小翻转次数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function (A, K) {
  // 1. 暴力滑窗 (2192 ms 45.2 MB)
  let ans = 0, l = 0, r = 0;
  const n = A.length;
  while (r < n) {
    if (r < K - 1) {
      r++;
      continue;
    }
    if (A[l] === 0) {
      for (let i = l; i <= r; i++) A[i] = 1 - A[i];
      ans++;
    }
    l++;
    r++;
  }
  for (const a of A) {
    if (a === 0) return -1;
  }
  return ans;

  // TODO 2. 查分数组
};

// @lc code=end

console.log(minKBitFlips([0, 1, 0], 1)); // 2
console.log(minKBitFlips([1, 1, 0], 2)); // -1
console.log(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3)); // 3
