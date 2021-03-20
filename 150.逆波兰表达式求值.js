/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // 1. 栈 (96 ms 40.4 MB)(63.91% 46.36%)
  const stack = [];
  const isNumber = s => !['+', '-', '*', '/'].includes(s);
  for (const token of tokens) {
    if (isNumber(token)) {
      stack.push(Number(token));
      continue;
    }
    const num2 = stack.pop();
    const num1 = stack.pop();
    switch (token) {
      case '+': stack.push(num1 + num2); break;
      case '-': stack.push(num1 - num2); break;
      case '*': stack.push(num1 * num2); break;
      case '/': stack.push(num1 / num2 | 0); break;
    }
  }
  return stack.pop();
};

// @lc code=end

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
