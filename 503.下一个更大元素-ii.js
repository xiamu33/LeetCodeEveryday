/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // 1. 单调栈 (124 ms 43.3 MB)(89.80% 91.76%)
  const n = nums.length;
  const ans = Array.from({ length: n }).fill(-1);
  const idxStack = [];
  for (let i = 0; i < n * 2 - 1; i++) {
    while (idxStack.length && nums[idxStack[idxStack.length - 1]] < nums[i % n]) {
      ans[idxStack.pop()] = nums[i % n];
    }
    idxStack.push(i % n);
  }
  return ans;
};

// @lc code=end

console.log(nextGreaterElements([1, 2, 1])); // [2,-1,2]
