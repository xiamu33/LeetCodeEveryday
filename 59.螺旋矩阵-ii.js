/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 1. 螺旋遍历 (88 ms 37.8 MB)(40.66% 83.80%)
  const ans = Array.from({ length: n }).map(() => Array.from({ length: n }));
  let c = 1, i = 0, j = 0, direct = 0;
  let borderTop = 1, borderBottom = n - 1, borderRight = n - 1, borderLeft = 0;
  while (c <= n * n) {
    ans[i][j] = c++;
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

console.log(generateMatrix(3)); // [[1,2,3],[8,9,4],[7,6,5]]
