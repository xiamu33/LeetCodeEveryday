/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  // 1. Kruskal 算法 (1448 ms 94.9 MB)
  const dist = (x, y) => {
    return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
  }

  const n = points.length;
  const dsu = new DisjointSetUnion(n);
  const edges = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push([dist(i, j), i, j]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]);

  let ret = 0, num = 1;
  for (const [length, x, y] of edges) {
    if (dsu.unionSet(x, y)) {
      ret += length;
      num += 1;
      if (num === n) {
        break;
      }
    }
  }
  return ret;

  // TODO 2.
};

class DisjointSetUnion {
  constructor(n) {
    this.n = n;
    this.rank = new Array(n).fill(1);
    this.f = new Array(n).fill(0).map((element, index) => index);
  }

  find(x) {
    if (this.f[x] === x) {
      return x;
    }
    this.f[x] = this.find(this.f[x]);
    return this.f[x];
  }

  unionSet(x, y) {
    let fx = this.find(x), fy = this.find(y);
    if (fx === fy) {
      return false;
    }

    if (this.rank[fx] < this.rank[fy]) {
      [fx, fy] = [fy, fx];
    }
    this.rank[fx] += this.rank[fy];
    this.f[fy] = fx;
    return true;
  }
}

// @lc code=end

console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])); // 20
console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]])); // 18
console.log(minCostConnectPoints([[0, 0], [1, 1], [1, 0], [-1, 1]])); // 4
console.log(minCostConnectPoints([[-1000000, -1000000], [1000000, 1000000]])); // 4000000
