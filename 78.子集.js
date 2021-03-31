/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 1. 枚举 (88 ms 39.5 MB)(72.29% 93.12%)
  const ans = [[]];
  for (const n of nums) {
    const len = ans.length;
    for (let i = 0; i < len; i++) {
      ans.push(ans[i].concat(n));
    }
  }
  return ans;
};

// @lc code=end
