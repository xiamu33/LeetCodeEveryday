/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // ! 1. 妥妥超时了（k=5000档）
  // if (k === 1) return nums;
  // const ans = [];
  // for (let i = 0; i <= nums.length - k; i++) {
  //   ans.push(Math.max(...nums.slice(i, i + k)));
  // }
  // return ans;

  // ! 2. md又超时了。。（k=1w档）
  // if (k === 1) return nums;
  // // 维护一个有序视窗，处理入栈出栈
  // const window = nums.slice(0, k).sort((a, b) => b - a);
  // const ans = [window[0]];
  // // 出栈
  // for (let i = 0; i <= nums.length - k - 1; i++) {
  //   const popNum = nums[i];
  //   window.splice(window.findIndex(n => n === popNum), 1);
  //   const nextNum = nums[i + k];
  //   if (nextNum >= window[0]) {
  //     window.splice(0, 0, nextNum);
  //     ans.push(nextNum);
  //   } else {
  //     const insertIndex = window.findIndex(n => n <= nextNum);
  //     if (!~insertIndex) window.push(nextNum);
  //     else window.splice(insertIndex, 0, nextNum);
  //     ans.push(window[0]);
  //   }
  // }
  // return ans;

  // 3.放弃抄官方答案
  /** 维护一份窗口中最大值索引 */
  const q = [];
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }

  const ans = [nums[q[0]]];
  for (let i = k; i < nums.length; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
    while (q[0] <= i - k) {
      q.shift();
    }
    ans.push(nums[q[0]]);
  }
  return ans;
};

// @lc code=end

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([9,11], 2));
console.log(maxSlidingWindow([1, -2], 1));
