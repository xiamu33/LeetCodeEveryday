/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  // 1. 遍历 (120 ms 43.8 MB)
  let inc = null;
  for (let i = 1; i < A.length; i++) {
    const diff = A[i] - A[i - 1];
    if (diff === 0) continue;
    if (inc == null) {
      inc = diff > 0;
      continue;
    }
    if ((diff > 0) !== inc) return false;
  }
  return true;
};

// @lc code=end

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 3, 2])); // false
console.log(isMonotonic([1, 2, 4, 5])); // true
console.log(isMonotonic([1, 1, 1])); // true
