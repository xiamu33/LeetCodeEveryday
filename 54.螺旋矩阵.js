/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 1. 递归 (80 ms 37.7 MB)(71.16% 41.01%)
  // const ans = [];
  // const spiralLayer = (matrix) => {
  //   const m = matrix.length;
  //   const n = matrix[0].length;
  //   if (m === 1) {
  //     ans.push(...matrix[0]);
  //     return;
  //   }
  //   const top = matrix[0];
  //   const bottom = matrix[m - 1].reverse();
  //   const left = [], right = [];
  //   const nextMatrix = [];
  //   for (let i = 1; i < m - 1; i++) {
  //     right.push(matrix[i][n - 1]);
  //     if (n > 1) left.unshift(matrix[i][0]);
  //     if (matrix[0].length > 2) nextMatrix.push(matrix[i].slice(1, -1));
  //   }
  //   ans.push(...top, ...right, ...bottom, ...left);
  //   if (nextMatrix.length) spiralLayer(nextMatrix, ans);
  // }
  // spiralLayer(matrix, ans);
  // return ans;

  // 2. 螺旋遍历 (76 ms 37.7 MB)(86.95% 41.01%)
  const ans = [];
  let i = 0, j = 0, direct = 0;
  const m = matrix.length, n = matrix[0].length;
  let borderTop = 1, borderBottom = m - 1, borderRight = n - 1, borderLeft = 0;
  while (ans.length < m * n) {
    ans.push(matrix[i][j]);
    if (direct === 0) {
      if (++j > borderRight) {
        j--;
        i++;
        direct = 1;
        borderRight--;
      }
    } else if (direct === 1) {
      if (++i > borderBottom) {
        i--;
        j--;
        direct = 2;
        borderBottom--;
      }
    } else if (direct === 2) {
      if (--j < borderLeft) {
        j++;
        i--;
        direct = 3;
        borderLeft++;
      }
    } else if (direct === 3) {
      if (--i < borderTop) {
        i++;
        j++;
        direct = 0;
        borderTop++;
      }
    }
  }
  return ans;
};

// @lc code=end

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]
