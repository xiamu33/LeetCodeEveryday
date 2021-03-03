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
  // 1. 暴力解法
  // const m = matrix.length, n = matrix[0] ? matrix[0].length : 0;
  // this.matrix = Array.from({ length: m }).map(() => Array.from({ length: n }));
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     this.matrix[i][j] = matrix[i][j];
  //   }
  // }

  // 2. 一维前缀和
  // const m = matrix.length;
  // if (m <= 0) return;
  // const n = matrix[0].length;
  // this.sums = Array.from({ length: m }).map(() => Array.from({ length: n + 1 }).fill(0));
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j];
  //   }
  // }

  // 3. 二维前缀和
  const m = matrix.length;
  if (m <= 0) return;
  const n = matrix[0].length;
  this.sums = Array.from({ length: m + 1 }).map(() => Array.from({ length: n + 1 }).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.sums[i + 1][j + 1] = this.sums[i][j + 1] + this.sums[i + 1][j] - this.sums[i][j] + matrix[i][j];
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
  // 1. 暴力解法 (280 ms 42.5 MB)
  // let sum = 0;
  // for (let i = row1; i <= row2; i++) {
  //   for (let j = col1; j <= col2; j++) {
  //     sum += this.matrix[i][j];
  //   }
  // }
  // return sum;

  // 2. 一维前缀和 (120 ms 42.5 MB)(59.02% 72.95%)
  // let sum = 0;
  // for (let i = row1; i <= row2; i++) {
  //   sum += this.sums[i][col2 + 1] - this.sums[i][col1];
  // }
  // return sum;

  // 3. 二维前缀和 (104 ms 42.6 MB)(94.26% 58.20%)
  return this.sums[row2 + 1][col2 + 1] - this.sums[row1][col2 + 1] - this.sums[row2 + 1][col1] + this.sums[row1][col1];
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
