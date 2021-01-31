/*
 * @lc app=leetcode.cn id=1579 lang=javascript
 *
 * [1579] 保证图可完全遍历
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
  // 1. 并查集 (340 ms 72.8 MB)
  const ufa = new UnionFind(n), ufb = new UnionFind(n);
  let ans = 0;
  edges.forEach(edge => {
    edge[1]--;
    edge[2]--;
  })
  for (const [t, u, v] of edges) {
    if (t !== 3) continue;
    if (ufa.union(u, v)) {
      // 未连通
      ufb.union(u, v);
    } else ans++;
  }
  for (const [t, u, v] of edges) {
    if (t === 1) {
      if (!ufa.union(u, v)) ans++;
    } else if (t === 2) {
      if (!ufb.union(u, v)) ans++;
    }
  }
  if (ufa.count !== 1 || ufb.count !== 1) return -1
  return ans;
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

console.log(maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 3], [1, 2, 4], [1, 1, 2], [2, 3, 4]])); // 2
console.log(maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 4], [2, 1, 4]])); // 0
