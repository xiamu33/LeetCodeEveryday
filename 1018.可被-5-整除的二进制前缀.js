/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  // 1. 只需判断最后一位 (88 ms	41.4 MB)
  const ans = [];
  let n = 0;
  for (let i = 0; i < A.length; i++) {
    n = (n * 2 + A[i]) % 10; // 只需最后一位
    ans[i] = n === 0 || n === 5;
  }
  return ans;
};

// @lc code=end

console.log(prefixesDivBy5([0, 1, 1])); // [true,false,false]
console.log(prefixesDivBy5([1, 1, 1])); // [false,false,false]
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1])); // [true,false,false,false,true,false]

const arr = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1];
console.log(prefixesDivBy5(arr));
