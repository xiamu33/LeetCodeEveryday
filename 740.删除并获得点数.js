/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  // 1. dp (O(n+max) O(max))(88 ms 39.7 MB)(75.00% 46.67%)
  const maxVal = Math.max(...nums);
  const sum = Array.from({ length: maxVal + 1 }).fill(0);
  for (const num of nums) {
    sum[num] += num;
  }
  const rob = nums => {
    const size = nums.length;
    let first = nums[0], second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < size; i++) {
      let temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
    }
    return second;
  }
  return rob(sum);
};

// @lc code=end

console.log(deleteAndEarn([3, 4, 2])); // 6
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); // 9
