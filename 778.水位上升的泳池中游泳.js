/*
 * @lc app=leetcode.cn id=778 lang=javascript
 *
 * [778] 水位上升的泳池中游泳
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  // 1. 并查集 (136 ms 46.1 MB)
  const n = grid.length;
  const edges = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      if (i > 0) edges.push([idx - n, idx, Math.max(grid[i][j], grid[i - 1][j])]);
      if (j > 0) edges.push([idx - 1, idx, Math.max(grid[i][j], grid[i][j - 1])]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n * n);
  let ans = 0;
  for (const [x, y, v] of edges) {
    uf.union(x, y);
    if (uf.isConnected(0, n * n - 1)) {
      ans = v;
      break;
    }
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

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// @lc code=end

// console.log(swimInWater([[0, 2], [1, 3]])); // 3
console.log(swimInWater([
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6]
])); // 16
