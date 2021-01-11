/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  // 1. 分组索引 (208 ms 60.8 MB)
  const n = s.length;
  const unionFind = new UnionFind(n);
  const ans = Array(n);
  const map = new Map;
  let i = pairs.length;
  while (i--) unionFind.union(pairs[i][0], pairs[i][1]);
  while (++i < n) {
    const rootI = unionFind.find(i);
    if (!map.has(rootI)) map.set(rootI, []);
    map.get(rootI).push(i);
  }
  map.forEach(v => {
    const n = v.slice().sort((a, b) => s.charCodeAt(a) - s.charCodeAt(b));
    for (let j = 0; j < v.length; j++) ans[v[j]] = s[n[j]];
  });
  return ans.join('');
};

class UnionFind {
  constructor(n) {
    this.parents = new Uint32Array(n);
    this.ranks = new Uint32Array(n);
    while (n--) this.parents[n] = n;
  }
  union(x, y) {
    const rootX = this.find(x), rootY = this.find(y);
    if (rootX !== rootY) {
      const t = this.ranks[rootX] - this.ranks[rootY];
      if (t <= 0) {
        this.parents[rootX] = rootY;
        if (t === 0) this.ranks[rootY]++;
      } else
        this.parents[rootY] = rootX;
    }
  }
  find(x) {
    while (x !== this.parents[x]) x = this.parents[x];
    return x;
  }
}

// @lc code=end

console.log(smallestStringWithSwaps("dcab", [[0, 3], [1, 2]]));
console.log(smallestStringWithSwaps("dcab", [[0, 3], [1, 2], [0, 2]]));
