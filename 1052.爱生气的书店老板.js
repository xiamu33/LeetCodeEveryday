/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  // 双指针 (88 ms 41.7 MB)
  let l = 0, r = 0, sum1 = 0, sum2 = 0, max2 = 0;
  while (r < customers.length) {
    if (grumpy[r] === 0) sum1 += customers[r];
    else {
      sum2 += customers[r];
      max2 = Math.max(max2, sum2);
    }
    if (r - l + 1 >= X) sum2 -= customers[l] * grumpy[l++];
    r++;
  }
  return sum1 + max2;
};

// @lc code=end

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)); // 16
console.log(maxSatisfied([9, 10, 4, 5], [1, 0, 1, 1], 1)); // 19
