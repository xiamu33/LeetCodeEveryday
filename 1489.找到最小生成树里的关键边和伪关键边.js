/*
 * @lc app=leetcode.cn id=1489 lang=javascript
 *
 * [1489] 找到最小生成树里的关键边和伪关键边
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
  // 1. 枚举 + 最小生成树判定 (268 ms 46 MB)
  const m = edges.length;
  for (const [i, edge] of edges.entries()) {
    edge.push(i);
  }
  edges.sort((a, b) => a[2] - b[2]);

  // 计算 value
  const uf_std = new UnionFind(n);
  let value = 0;
  for (let i = 0; i < m; i++) {
    if (uf_std.unite(edges[i][0], edges[i][1])) {
      value += edges[i][2];
    }
  }

  const ans = [[], []];

  for (let i = 0; i < m; i++) {
    // 判断是否是关键边
    let uf = new UnionFind(n);
    let v = 0;
    for (let j = 0; j < m; j++) {
      if (i !== j && uf.unite(edges[j][0], edges[j][1])) {
        v += edges[j][2];
      }
    }
    if (uf.setCount !== 1 || (uf.setCount === 1 && v > value)) {
      ans[0].push(edges[i][3]);
      continue;
    }

    // 判断是否是伪关键边
    uf = new UnionFind(n);
    uf.unite(edges[i][0], edges[i][1]);
    v = edges[i][2];
    for (let j = 0; j < m; j++) {
      if (i !== j && uf.unite(edges[j][0], edges[j][1])) {
        v += edges[j][2];
      }
    }
    if (v === value) {
      ans[1].push(edges[i][3]);
    }
  }
  return ans;

  // TODO 2.
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (v, i) => i);
    this.size = Array.from({ length: n }).fill(1);
    // 当前连通分量数目
    this.setCount = n;
  }

  findSet(x) {
    if (this.parent[x] === x) {
      return x;
    }
    this.parent[x] = this.findSet(this.parent[x]);
    return this.parent[x];
  }

  unite(a, b) {
    let x = this.findSet(a), y = this.findSet(b);
    if (x === y) {
      return false;
    }
    if (this.size[x] < this.size[y]) {
      [x, y] = [y, x];
    }
    this.parent[y] = x;
    this.size[x] += this.size[y];
    this.setCount -= 1;
    return true;
  }

  connected(a, b) {
    const x = this.findSet(a), y = this.findSet(b);
    return x === y;
  }
}

// @lc code=end

console.log(
  findCriticalAndPseudoCriticalEdges(
    5,
    [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 2],
      [0, 3, 2],
      [0, 4, 3],
      [3, 4, 3],
      [1, 4, 6]
    ]
  )
); // [[0,1],[2,3,4,5]]

console.log(
  findCriticalAndPseudoCriticalEdges(
    4,
    [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 1],
      [0, 3, 1]
    ]
  )
); // [[],[0,1,2,3]]
