/*
 * @lc app=leetcode.cn id=1631 lang=javascript
 *
 * [1631] 最小体力消耗路径
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  // 1. 并查集 (320 ms 45.8 MB)
  const m = heights.length, n = heights[0].length;
  const edges = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      if (i > 0) edges.push([idx - n, idx, Math.abs(heights[i][j] - heights[i - 1][j])]);
      if (j > 0) edges.push([idx - 1, idx, Math.abs(heights[i][j] - heights[i][j - 1])]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(m * n);
  let ans = 0;
  for (const [x, y, d] of edges) {
    uf.union(x, y);
    if (uf.connected(0, m * n - 1)) {
      ans = d;
      break;
    };
  }
  return ans;
};

class UnionFind {
  constructor(n) {
    this.pa = Array.from({ length: n }, (v, i) => i);
    this.sz = Array.from({ length: n }).fill(1);
  }

  find(x) {
    if (this.pa[x] !== x) this.pa[x] = this.find(this.pa[x]);
    return this.pa[x];
  }

  union(x, y) {
    x = this.find(x); y = this.find(y);
    if (x === y) return false;
    if (this.sz[x] < this.sz[y]) [x, y] = [y, x];
    this.pa[y] = x;
    this.sz[x] += this.sz[y];
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// @lc code=end

// console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]])); // 2
// console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]])); // 1
// console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]])); // 0
console.log(minimumEffortPath([
  [4, 3, 4, 10, 5, 5, 9, 2],
  [10, 8, 2, 10, 9, 7, 5, 6],
  [5, 8, 10, 10, 10, 7, 4, 2],
  [5, 1, 3, 1, 1, 3, 1, 9],
  [6, 4, 10, 6, 10, 9, 4, 6]
])); // 5
