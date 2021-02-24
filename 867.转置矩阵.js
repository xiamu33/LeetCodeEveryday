/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  // 1. (92 ms 40.4 MB) - 2020-12-26
  // const B = [];
  // for (let i = 0; i < A.length; i++) {
  //   for (let j = 0; j < A[i].length; j++) {
  //     if (!B[j]) B[j] = [];
  //     B[j][i] = A[i][j];
  //   }
  // }
  // return B;

  // 2. (84 ms 39.9 MB) - 2021-2-25
  const m = A.length, n = A[0].length;
  const ans = Array.from({ length: n }).map(() => Array.from({ length: m }));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][i] = A[i][j];
    }
  }
  return ans;
};

// @lc code=end

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose([[1, 2, 3], [4, 5, 6]])); // [[1,4],[2,5],[3,6]]
