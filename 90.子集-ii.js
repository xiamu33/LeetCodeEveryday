/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 1. 枚举 (96 ms 39.6 MB)(46.33% 94.58%)
  nums.sort((a, b) => a - b);
  const ans = [[], [nums[0]]];
  let n = 1;
  for (let i = 1; i < nums.length; i++) {
    const len = ans.length;
    if (nums[i] !== nums[i - 1]) n = len;
    for (let j = len - n; j < len; j++) {
      ans.push(ans[j].concat(nums[i]));
    }
  }
  return ans;
};

// @lc code=end
