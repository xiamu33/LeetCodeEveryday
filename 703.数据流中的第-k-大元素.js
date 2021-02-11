/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k - 1;
  this.list = nums.sort((a, b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // 1. 二分法插入 (164 ms 46.1 MB)
  let left = 0, right = this.list.length - 1;
  while (left <= right) {
    const mid = left + (right - left) / 2 | 0;
    if (this.list[mid] > val) left = mid + 1;
    else right = mid - 1;
  }
  this.list.splice(left, 0, val);
  return this.list[this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
