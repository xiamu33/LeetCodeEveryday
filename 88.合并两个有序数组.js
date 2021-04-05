/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 1. 自带函数 (88 ms 39.2 MB)(47.81% 5.44%)
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);

  // 2. 双指针 (80 ms 37.9 MB)(83.53% 71.96%)
  let p1 = m - 1, p2 = n - 1;
  while (p1 >= 0 || p2 >= 0) {
    const idx = p1 + p2 + 1;
    if (p1 < 0) {
      nums1[idx] = nums2[p2--];
    } else if (p2 < 0) {
      nums1[idx] = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      nums1[idx] = nums1[p1--];
    } else {
      nums1[idx] = nums2[p2--];
    }
  }
};

// @lc code=end
