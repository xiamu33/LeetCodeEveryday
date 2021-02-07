/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  // (84 ms 40.6 MB)
  const len = nums.length;
  if (len <= 2) return true;
  let count = 0;
  if (nums[0] > nums[1]) {
    nums[0] = nums[1];
    count++;
  }
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      if (count > 1) return false;
      if (nums[i - 1] > nums[i + 1]) nums[i + 1] = nums[i];
      else nums[i] = nums[i - 1];
    }
  }
  return true;
};

// @lc code=end

console.log(checkPossibility([4, 2, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false
console.log(checkPossibility([3, 4, 2, 3])); // false
