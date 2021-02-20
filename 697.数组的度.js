/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // (88 ms 44.3 MB)
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const n = nums[i];
    if (!map[n]) map[n] = [];
    map[n].push(i);
  }
  let arrDeg = 0, ans = len;
  for (const posArr of Object.values(map)) {
    const deg = posArr.length;
    if (deg < arrDeg) continue;
    const subArrLen = posArr[deg - 1] - posArr[0] + 1;
    if (deg > arrDeg) ans = subArrLen;
    if (deg === arrDeg) ans = Math.min(ans, subArrLen);
    arrDeg = deg;
  }
  return ans;
};

// @lc code=end

console.log(findShortestSubArray([1, 2, 2, 3, 1])); // 2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // 6
