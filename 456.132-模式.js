/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  // 1. 暴力求解 (144 ms 39.4 MB)(36.92% 95.38%)
  // const n = nums.length;
  // let min = nums[0];
  // for (let i = 1; i < n; i++) {
  //   const num = nums[i];
  //   if (num < min) {
  //     min = num;
  //     continue;
  //   }
  //   for (let j = i + 1; j < n; j++) {
  //     if (nums[j] > min && nums[j] < num) return true;
  //   }
  // }
  // return false;

  // 2. 单调栈 (84 ms 39.8 MB)(92.31% 61.54%)
  const stack = [], n = nums.length;
  let k = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    const num = nums[i];
    if (num < k) return true;
    while (stack[stack.length - 1] < num) {
      k = Math.max(k, stack.pop());
    }
    stack.push(num);
  }
  return false;
};

// @lc code=end

console.log(find132pattern([1, 2, 3, 4])); // false
console.log(find132pattern([3, 1, 4, 2])); // true
