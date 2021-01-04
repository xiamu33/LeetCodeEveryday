/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 1. 递归
  // if (n === 0 || n === 1) return n;
  // if (fibMap[n]) return fibMap[n];
  // else return fibMap[n] = fib(n - 1) + fib(n - 2);

  // 2. 动态规划
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let pre = 1;
  let cur = 1;
  for (let i = 3; i <= n; i++) {
    const sum = pre + cur;
    pre = cur;
    cur = sum;
  }
  return cur;
};

// const fibMap = {};

// @lc code=end

console.log(fib(11));
console.log(fib(13));
