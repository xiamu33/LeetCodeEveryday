/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  // 1. 优先队列 (148 ms 42.3 MB)
  const pq = new PriorityQueue();
  const isOdd = !!(k & 1);
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    pq.insert(nums[i]);
    if (i >= k) pq.erase(nums[i - k]);
    if (i >= k - 1) ans.push(pq.getMedian(isOdd));
  }
  return ans;
};

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  insert(v) {
    let left = 0, right = this.queue.length - 1;
    while (left <= right) {
      const mid = left + (right - left) / 2 | 0;
      if (this.queue[mid] < v) left = mid + 1;
      else right = mid - 1;
    }
    this.queue.splice(left, 0, v);
  }

  erase(v) {
    const idx = this.queue.indexOf(v);
    this.queue.splice(idx, 1);
  }

  getMedian(isOdd) {
    const mid = this.queue.length / 2 | 0;
    return isOdd ? this.queue[mid] : (this.queue[mid - 1] + this.queue[mid]) / 2;
  }
}

// @lc code=end

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [1,-1,-1,3,5,6]
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 4)); // [0,1,1,4,5.5]
