/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 1. 双指针 (104 ms 39.5 MB)(32.33% 66.77%)
  // let l = 0, r = 2;
  // while (r < nums.length) {
  //   if (nums[l] === nums[r]) nums.splice(r, 1);
  //   else {
  //     l++;
  //     r++;
  //   }
  // }
  // return nums.length;

  // 2. 双指针 (96 ms 39.8 MB)(63.76% 21.80%)
  const n = nums.length;
  if (n <= 2) return n;
  let l = 2, r = 2;
  while (r < n) {
    if (nums[l - 2] !== nums[r]) {
      nums[l++] = nums[r];
    }
    r++;
  }
  return nums.length = l;
};

// @lc code=end

const nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums), nums);
