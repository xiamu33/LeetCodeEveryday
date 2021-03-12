/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  // 1. 栈 (88 ms 38.6 MB)(56.25% 83.33%)
  const n = preorder.length;
  let i = 0;
  const stack = [1];
  while (i < n) {
    if (!stack.length) return false;
    if (preorder[i] === ',') {
      i++;
    } else if (preorder[i] === '#') {
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      i++;
    } else {
      while (i < n && preorder[i] !== ',') {
        i++;
      }
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      stack.push(2);
    }
  }
  return stack.length === 0;
};

// @lc code=end

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")); // true
console.log(isValidSerialization("9,#,#,1")); // false
