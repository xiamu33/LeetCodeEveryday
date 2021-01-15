/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  // 1. (108 ms 44.9 MB)
  const p = new Map();
  for (let [x, _y] of stones) {
    let y = _y + 10000;
    !p.has(x) && p.set(x, [x]);
    !p.has(y) && p.set(y, [y]);
    if (p.get(x) !== p.get(y)) {
      if (p.get(x).length < p.get(y).length) {
        [x, y] = [y, x];
      }
      p.get(x).push(...p.get(y));
      p.get(y).forEach(z => p.set(z, p.get(x)));
    }
  }
  return stones.length - (new Set(p.values())).size;
};

// @lc code=end

console.log(removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]])); // 5
console.log(removeStones([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]])); // 3
