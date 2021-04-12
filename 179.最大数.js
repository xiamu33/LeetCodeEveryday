/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 1. 排序 (88 ms 39.9 MB)(72.15% 12.84%)
  nums.sort((a, b) => {
    const strA = a.toString() + b.toString();
    const strB = b.toString() + a.toString();
    return strB - strA;
  });
  if (nums[0] === 0) return "0"
  let ans = "";
  for (const n of nums) {
    ans += n.toString();
  }
  return ans;
};

// @lc code=end

console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
