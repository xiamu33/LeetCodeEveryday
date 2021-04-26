/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  // 1. 二分查找 (O(n*log(∑weights)) O(1))(100 ms 41.5 MB)(89.38% 63.13%)
  let l = Math.max(...weights), r = weights.reduce((p, c) => p + c, 0);
  while (l < r) {
    const mid = (l + r) / 2 | 0;
    let day = 1, cur = 0;
    for (const w of weights) {
      cur += w;
      if (cur > mid) {
        day++;
        cur = w;
      }
    }
    if (day > D) l = mid + 1;
    else r = mid;
  }
  return l;
};

// @lc code=end

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3)); // 6
