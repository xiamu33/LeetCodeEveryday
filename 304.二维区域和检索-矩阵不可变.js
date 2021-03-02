/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length, n = matrix[0] ? matrix[0].length : 0;
  this.matrix = Array.from({ length: m }).map(() => Array.from({ length: n }));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.matrix[i][j] = matrix[i][j];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  // (280 ms 42.5 MB)
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

const obj = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]);
console.log(obj.sumRegion(2, 1, 4, 3)); // 8
console.log(obj.sumRegion(1, 1, 2, 2)); // 11
console.log(obj.sumRegion(1, 2, 2, 4)); // 12
