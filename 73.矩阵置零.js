/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 1. 两个标记 (92 ms 39.6 MB)(98.80% 93.69%)
  // const m = matrix.length, n = matrix[0].length;
  // let col0 = false, row0 = false;
  // for (let i = 0; i < m; i++) {
  //   if (matrix[i][0] === 0) {
  //     col0 = true;
  //     break;
  //   }
  // }
  // for (let j = 0; j < n; j++) {
  //   if (matrix[0][j] === 0) {
  //     row0 = true;
  //     break;
  //   }
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       matrix[i][0] = matrix[0][j] = 0;
  //     }
  //   }
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     if (matrix[i][0] === 0 || matrix[0][j] === 0) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }
  // if (col0) {
  //   for (let i = 0; i < m; i++) {
  //     matrix[i][0] = 0;
  //   }
  // }
  // if (row0) {
  //   for (let j = 0; j < n; j++) {
  //     matrix[0][j] = 0;
  //   }
  // }

  // 2. 一个标记 (100 ms 39.4 MB)(93.54% 99.55%)
  const m = matrix.length, n = matrix[0].length;
  let col0 = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) col0 = true;
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (col0) matrix[i][0] = 0;
  }
};

// @lc code=end

const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(matrix)
console.log(matrix);
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]