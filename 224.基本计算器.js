/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 栈 (104 ms 40 MB)(62.78% 94.62%)
  const ops = [1];
  const n = s.length;
  let sign = 1, ans = 0, i = 0;
  while (i < n) {
    if (s[i] === ' ') i++;
    else if (s[i] === '+') {
      sign = ops[ops.length - 1];
      i++;
    } else if (s[i] === '-') {
      sign = -ops[ops.length - 1];
      i++;
    } else if (s[i] === '(') {
      ops.push(sign);
      i++;
    } else if (s[i] === ')') {
      ops.pop();
      i++;
    } else {
      let num = 0;
      while (i < n && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
        num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        i++;
      }
      ans += sign * num;
    }
  }
  return ans;
};

// @lc code=end

console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23
