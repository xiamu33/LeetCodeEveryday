/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  // 1. map (96 ms 39.7 MB)(32.65% 28.57%)
  const map = {};
  for (const n of answers) {
    if (!map[n]) map[n] = 0;
    map[n]++;
  }
  let ans = 0;
  for (const n in map) {
    const times = map[n];
    const val = Number(n) + 1;
    if (times % val === 0) ans += times / val * val;
    else ans += ((times / val | 0) + 1) * val;
  }
  return ans;
};

// @lc code=end

console.log(numRabbits([1, 1, 2])); // 5
console.log(numRabbits([10, 10, 10])); // 11
