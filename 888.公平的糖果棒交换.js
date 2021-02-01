/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果棒交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  // 1. 遍历 (544 ms 42.6 MB)
  // const sumA = A.reduce((p, c) => p + c, 0);
  // const sumB = B.reduce((p, c) => p + c, 0);
  // const diff = (sumA - sumB) / 2;
  // for (const a of A) {
  //   const b = a - diff;
  //   if (B.includes(b)) return [a, b];
  // }

  // 2. 哈希表 (112 ms 47 MB)
  const sumA = A.reduce((p, c) => p + c, 0);
  const sumB = B.reduce((p, c) => p + c, 0);
  const diff = (sumA - sumB) / 2;
  const setB = new Set(B);
  for (const a of A) {
    const b = a - diff;
    if (setB.has(b)) return [a, b];
  }
};

// @lc code=end

console.log(fairCandySwap([1, 1], [2, 2])); // [1,2]
console.log(fairCandySwap([1, 2], [2, 3])); // [1,2]
console.log(fairCandySwap([2], [1, 3])); // [2,3]
console.log(fairCandySwap([1, 2, 5], [2, 4])); // [5,4]
