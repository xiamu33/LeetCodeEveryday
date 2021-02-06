/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  // 1. (96 ms 45.8 MB)
  const leftArr = cardPoints.slice(0, k);
  let sum = leftArr.reduce((p, c) => p + c, 0);
  let ans = sum;
  for (let i = 0; i < k; i++) {
    const leftPop = leftArr.pop();
    const rightPop = cardPoints.pop();
    sum = sum - leftPop + rightPop;
    if (rightPop > leftPop) ans = Math.max(ans, sum);
  }
  return ans;
};

// @lc code=end

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12
console.log(maxScore([2, 2, 2], 2)); // 4
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7)); // 55
console.log(maxScore([1, 1000, 1], 1)); // 1
