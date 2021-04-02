/*
 * @lc app=leetcode.cn id=17.21 lang=javascript
 *
 * 面试题 [17.21] 直方图的水量
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 1. dp (88 ms 39.5 MB)(77.42% 45.97%)
  // const n = height.length;
  // const rightMax = Array.from({ length: n }).fill(0);
  // let max = 0;
  // for (let i = n - 1; i >= 0; i--) {
  //   if (height[i + 1] == null) continue;
  //   max = Math.max(max, height[i + 1]);
  //   rightMax[i] = max;
  // }
  // max = 0;
  // let ans = 0;
  // for (let i = 0; i < n; i++) {
  //   if (height[i - 1] == null) continue;
  //   max = Math.max(max, height[i - 1]);
  //   const add = Math.min(rightMax[i], max) - height[i];
  //   if (add > 0) ans += add;
  // }
  // return ans;

  // 2. 双指针 (84 ms 39.3 MB)(86.29% 86.29%)
  const n = height.length;
  let l = 0, r = n - 1, ans = 0;
  let lMax = height[l], rMax = height[r];
  while (l < r) {
    if (height[l] < height[r]) {
      const add = lMax - height[l];
      if (add > 0) ans += add;
      lMax = Math.max(lMax, height[l++]);
    } else {
      const add = rMax - height[r];
      if (add > 0) ans += add;
      rMax = Math.max(rMax, height[r--])
    }
  }
  return ans;
};

// @lc code=end

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
