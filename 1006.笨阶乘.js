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
  // const stack = [N--];
  // let sign = '*';
  // while (N > 0) {
  //   if (sign === '*') {
  //     stack.push(stack.pop() * N);
  //     sign = '/';
  //   } else if (sign === '/') {
  //     stack.push(stack.pop() / N | 0);
  //     sign = '+';
  //   } else if (sign === '+') {
  //     stack.push(N);
  //     sign = '-';
  //   } else {
  //     stack.push(-N);
  //     sign = '*';
  //   }
  //   N--;
  // }
  // let ans = 0;
  // while (stack.length) {
  //   ans += stack.pop();
  // }
  // return ans;

  // 2. 找规律 (84 ms 37.9 MB)(80.74% 79.83%)
  if (N === 1) return 1;
  if (N === 2) return 2;
  if (N === 3) return 6;
  if (N === 4) return 7;

  if (N % 4 === 0) return N + 1;
  if (N % 4 <= 2) return N + 2;
  return N - 1;
};

// @lc code=end

console.log(clumsy(4)); // 7
console.log(clumsy(10)); // 12
