/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // 1. 额外数组 (140 ms 47 MB)
  // const arr = Array.from({ length: nums.length }).fill(1);
  // for (const n of nums) {
  //   arr[n - 1]--;
  // }
  // const ans = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 1) ans.push(i + 1);
  // }
  // return ans;

  // 2. 原地修改 (112 ms 45.5 MB)
  const n = nums.length;
  for (const num of nums) {
    nums[(num - 1) % n] += n;
  }
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= n) ans.push(i + 1);
  }
  return ans;
};

// @lc code=end

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
