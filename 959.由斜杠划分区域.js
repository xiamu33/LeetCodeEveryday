/*
 * @lc app=leetcode.cn id=959 lang=javascript
 *
 * [959] 由斜杠划分区域
 */

// @lc code=start
/**
 * 把每一个单元格拆分成 4 个小三角形，分情况合并相邻的小三角形
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  // 1. 并查集 (108 ms 42.4 MB)
  const n = grid.length;
  const size = 4 * n * n;
  const uf = new UnionFind(size);
  for (let i = 0; i < n; i++) {
    const row = grid[i];
    for (let j = 0; j < n; j++) {
      const index = 4 * (i * n + j);
      // 单元格内合并
      if (row[j] === '/') {
        uf.union(index, index + 3)
        uf.union(index + 1, index + 2);
      } else if (row[j] === '\\') {
        uf.union(index, index + 1);
        uf.union(index + 2, index + 3);
      } else {
        uf.union(index, index + 1);
        uf.union(index, index + 2);
        uf.union(index, index + 3);
      }
      // 向右向下合并
      if (j < n - 1) uf.union(index + 1, index + 4 + 3);
      if (i < n - 1) uf.union(index + 2, index + 4 * n);
    }
  }
  return uf.count;
};

class UnionFind {
  constructor(n) {
    this.pa = Array.from({ length: n }, (v, i) => i);
    // 当前连通分量数目
    this.count = n;
  }

  find(x) {
    if (this.pa[x] !== x) this.pa[x] = this.find(this.pa[x]);
    return this.pa[x];
  }

  union(x, y) {
    x = this.find(x); y = this.find(y);
    if (x === y) return false;
    this.pa[y] = x;
    this.count--;
    return true;
  }
}

// @lc code=end

console.log(regionsBySlashes([' /', '  '])); // 1
console.log(regionsBySlashes(['\\/', '/\\'])); // 4
console.log(regionsBySlashes(['/\\', '\\/'])); // 5
