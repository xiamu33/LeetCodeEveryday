/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // (132 ms 43.5 MB)
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return ans;
};

// @lc code=end

console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9
