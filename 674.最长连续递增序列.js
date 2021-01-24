/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  // 1. 遍历 (80 ms 38.5 MB)
  const len = nums.length;
  if (!len) return 0;
  let max = 0;
  let n = 1;
  let cache = nums[0];
  for (let i = 1; i < len; i++) {
    if (cache < nums[i]) n++;
    else {
      max = Math.max(max, n);
      n = 1;
    }
    cache = nums[i];
  }
  return max > n ? max : n;
};

// @lc code=end

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // 1
console.log(findLengthOfLCIS([1, 2, 3, 2, 3, 4, 5, 6])); // 5
