/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // 1. map (156 ms 48.2 MB)
  // const map = {};
  // const getDominoId = domino => domino.sort((a, b) => a - b).toString();
  // for (const domino of dominoes) {
  //   const dominoId = getDominoId(domino);
  //   if (!map[dominoId]) map[dominoId] = 1;
  //   else map[dominoId]++;
  // }
  // return Object.values(map).reduce((p, c) => p + c * (c - 1) / 2, 0);

  // 2. 数组 (108 ms 44.7 MB)
  const arr = Array.from({ length: 100 }).fill(0);
  let ans = 0;
  for (const [a, b] of dominoes) {
    const n = a > b ? a + b * 10 : a * 10 + b;
    ans += arr[n]++;
  }
  return ans;
};

// @lc code=end

console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])); // 1
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [3, 4], [1, 2]])); // 4
