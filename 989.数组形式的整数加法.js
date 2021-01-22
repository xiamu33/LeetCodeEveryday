/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  // 1. (120 ms 44.2 MB)
  const ans = [];
  const len = A.length;
  let k = K;
  for (let i = len - 1; i >= 0; i--) {
    k += A[i];
    ans.push(k % 10);
    k = k / 10 >>> 0;
  }
  while (k > 0) {
    ans.push(k % 10);
    k = k / 10 >>> 0;
  }
  return ans.reverse();
};

// @lc code=end

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1,2,3,4]
console.log(addToArrayForm([2, 7, 4], 181)); // [4,5,5]
console.log(addToArrayForm([2, 1, 5], 806)); // [1,0,2,1]
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)); // [1,0,0,0,0,0,0,0,0,0,0]
console.log(addToArrayForm([2, 1, 5], 10086)); // [1,0,3,0,1]
