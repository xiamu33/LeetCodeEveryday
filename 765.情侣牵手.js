/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  // 1. 并查集 (76 ms 37.5 MB)
  const len = row.length;
  const n = len / 2;
  const uf = new UnionFind(n);
  for (let i = 0; i < len; i += 2) {
    uf.union(row[i] / 2 | 0, row[i + 1] / 2 | 0);
  }
  return n - uf.count;
};

class UnionFind {
  constructor(n) {
    this.pa = Array.from({ length: n }, (v, i) => i);
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

console.log(minSwapsCouples([0, 2, 1, 3])); // 1
console.log(minSwapsCouples([3, 2, 0, 1])); // 0
