/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 栈 (92 ms 42.2 MB)(95.04% 77.93%)
  s = s.trim();
  const stack = [], len = s.length;
  let preSign = '+', num = 0;
  for (let i = 0; i < len; i++) {
    const n = Number(s[i]);
    if (!isNaN(n) && s[i] !== ' ') {
      num = num * 10 + n;
    }
    if (isNaN(n) || i === len - 1) {
      switch (preSign) {
        case '+': stack.push(num); break;
        case '-': stack.push(-num); break;
        case '*': stack.push(stack.pop() * num); break;
        case '/': stack.push(stack.pop() / num | 0); break;
      }
      preSign = s[i];
      num = 0;
    }
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
};

// @lc code=end

console.log(calculate("3+2*2")); // 7
console.log(calculate("3-2*2")); // -1
console.log(calculate(" 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5
console.log(calculate("0*1")); // 0
console.log(calculate("0/1")); // 0
