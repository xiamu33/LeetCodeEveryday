/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // 1. 双指针 + 优先队列 (4780 ms 51.9 MB)
  // let l = 0, r = 0;
  // const pq = new PriorityQueue();
  // while (r < nums.length) {
  //   pq.insert(nums[r]);
  //   if (pq.diff > limit) {
  //     pq.erase(nums[l]);
  //     l++;
  //   }
  //   r++;
  // }
  // return r - l;

  // 2. 双指针 + 单调队列*2 (864 ms 49.7 MB)
  const queMax = [], queMin = [];
  let l = 0, r = 0, ans = 0;
  while (r < nums.length) {
    while (queMax.length && queMax[queMax.length - 1] < nums[r]) {
      queMax.pop();
    }
    queMax.push(nums[r]);
    while (queMin.length && queMin[queMin.length - 1] > nums[r]) {
      queMin.pop();
    }
    queMin.push(nums[r]);

    while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) {
      if (queMax[0] === nums[l]) queMax.shift();
      if (queMin[0] === nums[l]) queMin.shift();
      l++;
    }
    ans = Math.max(ans, r - l + 1);
    r++
  }
  return ans;
};

// 1. 双指针 + 优先队列
// class PriorityQueue {
//   constructor() {
//     this.queue = [];
//   }

//   get diff() {
//     return this.queue[0] - this.queue[this.queue.length - 1];
//   }

//   insert(v) {
//     let l = 0, r = this.queue.length - 1;
//     while (l <= r) {
//       const mid = l + (r - l) / 2 | 0;
//       if (this.queue[mid] > v) l = mid + 1;
//       else r = mid - 1;
//     }
//     this.queue.splice(l, 0, v);
//   }

//   erase(v) {
//     const idx = this.queue.indexOf(v);
//     if (!!~idx) this.queue.splice(idx, 1);
//   }
// }

// @lc code=end

console.log(longestSubarray([8, 2, 4, 7], 4)); // 2
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5)); // 4
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)); // 3
