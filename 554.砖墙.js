/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  // 1. map (O(nm) O(nm))(120 ms 44.1 MB)(31.82% 43.18%)
  const gapMap = new Map();
  for (const widths of wall) {
    const n = widths.length;
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += widths[i];
      gapMap.set(sum, (gapMap.get(sum) || 0) + 1);
    }
  }
  let maxCnt = 0;
  for (const c of gapMap.values()) {
    maxCnt = Math.max(maxCnt, c);
  }
  return wall.length - maxCnt;

};

// @lc code=end

console.log(leastBricks([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]])); // 2
console.log(leastBricks([[1], [1], [1]])); // 3
