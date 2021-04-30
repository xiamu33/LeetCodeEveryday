/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1. map (O(n) O(n))(88 ms 40.7 MB)(74.05% 6.72%)
  // const map = {};
  // for (const num of nums) {
  //   if (!map[num]) map[num] = 0;
  //   map[num]++;
  // }
  // for (const num in map) {
  //   if (map[num] === 1) return num;
  // }

  // 2. 位运算 (O(nlogC) O(1))(76 ms 39.2 MB)(97.54% 57.50%)
  let ans = 0;
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    for (const num of nums) {
      total += ((num >> i) & 1);
    }
    if (total % 3 !== 0) {
      ans |= (1 << i);
    }
  }
  return ans;
};

// @lc code=end

console.log(singleNumber([2, 2, 3, 2])); // 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 99
