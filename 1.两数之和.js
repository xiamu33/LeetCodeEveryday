/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const diffMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (diffMap[num] != null) return [diffMap[num], i];
    diffMap[target - num] = i;
  }
  return [null, null];
};

// @lc code=end
