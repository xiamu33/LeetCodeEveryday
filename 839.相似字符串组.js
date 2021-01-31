/*
 * @lc app=leetcode.cn id=839 lang=javascript
 *
 * [839] 相似字符串组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  // 1. 并查集 (116 ms 41.2 MB)
  const len = strs.length, strLen = strs[0].length;
  const uf = new UnionFind(len);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (uf.isConnected(i, j)) continue;
      if (checkStr(strs[i], strs[j], strLen)) uf.union(i, j);
    }
  }
  return uf.count;
};

function checkStr(a, b, len) {
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) {
      count++;
      if (count > 2) return false;
    }
  }
  return true;
}

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

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// @lc code=end

console.log(numSimilarGroups(["tars", "rats", "arts", "star"])); // 2
console.log(numSimilarGroups(["omv", "ovm"])); // 1
