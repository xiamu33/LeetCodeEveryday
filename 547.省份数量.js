/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 1. 并查集 (88 ms 41.1 MB)
  const n = isConnected.length;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) uf.union(i, j);
    }
  }
  return uf.count;
};

class UnionFind {
  constructor(n) {
    this.pa = Array.from({ length: n }, (v, i) => i);
    this.sz = Array.from({ length: n }).fill(1);
    this.count = n;
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
    this.count--;
    return true;
  }
}

// @lc code=end

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])); // 3
