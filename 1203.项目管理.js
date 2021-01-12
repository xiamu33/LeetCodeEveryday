/*
 * @lc app=leetcode.cn id=1203 lang=javascript
 *
 * [1203] 项目管理
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function (n, m, group, beforeItems) {
  // 1. 拓扑排序 (788 ms 74.6 MB)
  // const groupItem = new Array(n + m).fill(0).map(() => []);
  // // 组间和组内依赖图
  // const groupGraph = new Array(n + m).fill(0).map(() => []);
  // const itemGraph = new Array(n).fill(0).map(() => []);
  // // 组间和组内入度数组
  // const groupDegree = new Array(n + m).fill(0);
  // const itemDegree = new Array(n).fill(0);
  // const id = new Array(n + m).fill(0).map((v, index) => index);
  // let leftId = m;
  // // 给未分配的 item 分配一个 groupId
  // for (let i = 0; i < n; ++i) {
  //   if (group[i] === -1) {
  //     group[i] = leftId;
  //     leftId += 1;
  //   }
  //   groupItem[group[i]].push(i);
  // }
  // // 依赖关系建图
  // for (let i = 0; i < n; ++i) {
  //   const curGroupId = group[i];
  //   for (const item of beforeItems[i]) {
  //     const beforeGroupId = group[item];
  //     if (beforeGroupId === curGroupId) {
  //       itemDegree[i] += 1;
  //       itemGraph[item].push(i);
  //     } else {
  //       groupDegree[curGroupId] += 1;
  //       groupGraph[beforeGroupId].push(curGroupId);
  //     }
  //   }
  // }
  // // 组间拓扑关系排序
  // const groupTopSort = topSort(groupDegree, groupGraph, id);
  // if (groupTopSort.length == 0) {
  //   return [];
  // }
  // const ans = [];
  // // 组内拓扑关系排序
  // for (const curGroupId of groupTopSort) {
  //   const size = groupItem[curGroupId].length;
  //   if (size == 0) {
  //     continue;
  //   }
  //   const res = topSort(itemDegree, itemGraph, groupItem[curGroupId]);
  //   if (res.length === 0) {
  //     return [];
  //   }
  //   for (const item of res) {
  //     ans.push(item);
  //   }
  // }
  // return ans;

  // 2. 拓扑排序 (292 ms 62.1 MB)
  // https://leetcode-cn.com/problems/sort-items-by-groups-respecting-dependencies/solution/tuo-bu-pai-xu-jian-dan-shang-shou-by-man-yy96/
  const graphG = [], degG = new Uint16Array(n + m), idsG = [],
    graphI = [], degI = new Uint16Array(n), idsI = [], r = [];
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) {
      idsG[m] = m; // 从组数起分配，避免重复
      group[i] = m++;
    } else idsG[group[i]] = group[i];
    if (!idsI[group[i]]) idsI[group[i]] = []; // 同组项目，放入到一起
    idsI[group[i]].push(i);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < beforeItems[i].length; j++) {
      const itemI = beforeItems[i][j];
      if (group[i] === group[itemI]) {// 同组，收集 项目 依赖
        degI[i]++;
        if (!graphI[itemI]) graphI[itemI] = [];
        graphI[itemI].push(i);
      } else {// 不同组，收集 组 依赖
        degG[group[i]]++;
        if (!graphG[group[itemI]]) graphG[group[itemI]] = [];
        graphG[group[itemI]].push(group[i]);
      }
    }
  }
  const idsGS = sort(idsG.filter(v => v !== void 0), graphG, degG); // 组排序
  if (idsGS.length === 0) return [];
  for (let i = 0; i < idsGS.length; i++) {// 组有序，组内项目排序
    if (!idsI[idsGS[i]]) continue;
    const idsIS = sort(idsI[idsGS[i]], graphI, degI);
    if (idsIS.length === 0) return [];
    r.push(...idsIS);
  }
  return r;

};

// 1.
// function topSort(deg, graph, items) {
//   const Q = [];
//   for (const item of items) {
//     if (deg[item] === 0) {
//       Q.push(item);
//     }
//   }
//   const res = [];
//   while (Q.length) {
//     const u = Q.shift();
//     res.push(u);
//     for (let i = 0; i < graph[u].length; ++i) {
//       const v = graph[u][i];
//       if (--deg[v] === 0) {
//         Q.push(v);
//       }
//     }
//   }
//   return res.length == items.length ? res : [];
// }

// 2.
// 拓扑排序：id列表，图，入度
function sort(ids, graph, deg) {
  const q = [], r = [];
  let start = 0;
  for (let i = 0; i < ids.length; i++) if (deg[ids[i]] === 0) q.push(ids[i]);
  while (start < q.length) {
    const n = q[start++];
    r.push(n);
    if (!graph[n]) continue;
    for (let i = 0; i < graph[n].length; i++) if (--deg[graph[n][i]] === 0) q.push(graph[n][i]);
  }
  return r.length === ids.length ? r : [];
}

// @lc code=end

console.log(sortItems(8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3, 6], [], [], []]));
console.log(sortItems(8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3], [], [4], []]));
