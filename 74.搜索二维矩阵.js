/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 1. 两次二分查找 (84 ms 39 MB)(69.25% 38.23%)
  // const m = matrix.length, n = matrix[0].length;
  // if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;
  // let l = 0, r = m - 1;
  // while (l <= r) {
  //   const mid = (l + r) / 2 | 0;
  //   const midNum = matrix[mid][0];
  //   if (midNum === target) return true;
  //   if (midNum < target) l = mid + 1;
  //   else r = mid - 1;
  // }
  // const row = matrix[l - 1];
  // if (row[n - 1] === target) return true;
  // if (row[n - 1] < target) return false;
  // l = 0; r = n - 1;
  // while (l <= r) {
  //   const mid = l + (r - l) / 2 | 0;
  //   const midNum = row[mid];
  //   if (midNum === target) return true;
  //   if (midNum < target) l = mid + 1;
  //   else r = mid - 1;
  // }
  // return false;

  // 2. 一次二分查找 (84 ms 39 MB)(69.25% 38.23%)
  const m = matrix.length, n = matrix[0].length;
  if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;
  let start = 0, end = m * n - 1;
  while (start <= end) {
    const mid = (start + end) / 2 | 0;
    const val = matrix[mid / n | 0][mid % n];
    if (val === target) return true;
    if (val < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

// @lc code=end

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false
