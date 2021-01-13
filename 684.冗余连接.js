/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  // 1. 并查集 (76 ms 39 MB)
  const nodesCount = edges.length;
  const parent = new Array(nodesCount + 1).fill(0).map((value, index) => index);
  for (let i = 0; i < nodesCount; i++) {
    const edge = edges[i];
    const node1 = edge[0], node2 = edge[1];
    if (find(parent, node1) != find(parent, node2)) {
      union(parent, node1, node2);
    } else {
      return edge;
    }
  }
  return [0];
};

function union(parent, index1, index2) {
  parent[find(parent, index1)] = find(parent, index2);
}

function find(parent, index) {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index]);
  }
  return parent[index];
}

// @lc code=end

console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]])); // [2,3]
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])); // [1,4]
