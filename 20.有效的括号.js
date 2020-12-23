/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let i = 0; i < s.length; i++) {
    const curBracket = s[i];
    if (!stack.length) stack.push(curBracket);
    else {
      const preBracket = stack[stack.length - 1];
      if (preBracket === map[curBracket]) stack.pop();
      else stack.push(curBracket)
    }
  }
  return stack.length === 0;
};

// @lc code=end
