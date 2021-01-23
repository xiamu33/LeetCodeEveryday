/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  // 1. 深度优先搜索 (184 ms 64.6 MB)
  // if (connections.length < n - 1) return -1;

  // const edges = new Map();
  // for (const [x, y] of connections) {
  //   edges.get(x) ? edges.get(x).push(y) : edges.set(x, [y]);
  //   edges.get(y) ? edges.get(y).push(x) : edges.set(y, [x]);
  // }

  // const used = Array.from({ length: n }).fill(false);
  // let ans = 0;
  // for (let i = 0; i < n; i++) {
  //   if (!used[i]) {
  //     dfs(i, used, edges);
  //     ans++;
  //   }
  // }
  // return ans - 1;

  // 2. 并查集
  if (connections.length < n - 1) return -1;

  const uf = new UnionFind(n);
  for (const [x, y] of connections) {
    uf.union(x, y);
  }
  return uf.setCount - 1;
};

// 1. 深度优先搜索
// function dfs(n, used, edges) {
//   used[n] = true;
//   const conn = edges.get(n);
//   if (conn) {
//     for (const i of conn) {
//       if (!used[i]) dfs(i, used, edges);
//     }
//   }
// }

// 2. 并查集 (124 ms 50.9 MB)
class UnionFind {
  constructor(n) {
    this.pa = Array.from({ length: n }, (v, i) => i);
    this.sz = Array.from({ length: n }).fill(1);
    this.setCount = n;
  }

  find(x) {
    if (this.pa[x] !== x) this.pa[x] = this.find(this.pa[x]);
    return this.pa[x];
  }

  union(x, y) {
    x = this.find(x); y = this.find(y);
    if (x === y) return false;
    // 小家族合并到大家族
    if (this.sz[y] > this.sz[x]) [y, x] = [x, y];
    this.pa[y] = x;
    this.sz[x] += this.sz[y]
    this.setCount--;
    return true;
  }
}

// @lc code=end

console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]])); // 2
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2]])); // -1
console.log(makeConnected(5, [[0, 1], [0, 2], [3, 4], [2, 3]])); // 0
