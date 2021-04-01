/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  // 1. 栈 (84 ms 39.7 MB)(81.25% 37.50%)
  const stack = [N--];
  let sign = '*';
  while (N > 0) {
    if (sign === '*') {
      stack.push(stack.pop() * N);
      sign = '/';
    } else if (sign === '/') {
      stack.push(stack.pop() / N | 0);
      sign = '+';
    } else if (sign === '+') {
      stack.push(N);
      sign = '-';
    } else {
      stack.push(-N);
      sign = '*';
    }
    N--;
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
};

// @lc code=end

console.log(clumsy(4)); // 7
console.log(clumsy(10)); // 12
