/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  // 1. 双指针 (88 ms 42 MB)
  let l = 0, r = 0, nZero = 0;
  while (r < A.length) {
    if (A[r] === 0) nZero++;
    if (nZero > K) {
      if (A[l] === 0) nZero--;
      l++;
    }
    r++;
  }
  return r - l;
};

// @lc code=end

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); // 10
