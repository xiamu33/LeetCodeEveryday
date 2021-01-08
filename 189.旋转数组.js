/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 1. 暴利遍历 (92 ms 40.3 MB)
  // const cache = [];
  // const len = nums.length;
  // for (let i = 0; i < len; i++) {
  //   cache[(i + k) % len] = nums[i];
  // }
  // for (let i = 0; i < len; i++) {
  //   nums[i] = cache[i];
  // }

  // 2. js内置函数 (88 ms 39.8 MB) ! 艹还是这个快
  // const slice = nums.splice(nums.length - k);
  // nums.splice(0, 0, ...slice);

  // 3. 翻转数组 原地算法 (96 ms 38.8 MB)
  const len = nums.length;
  k = k > len ? k % len : k;
  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    const tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
}

// @lc code=end

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums); // [5,6,7,1,2,3,4]
