/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  // 栈 (92 ms 46.4 MB)(94.60% 48.10%)
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    if (stack.length && stack[stack.length - 1] === s) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
  return stack.join("");
};

// @lc code=end

console.log(removeDuplicates("abbaca")); // "ca"
