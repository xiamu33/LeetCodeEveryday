/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // (72 ms 37.6 MB)
  const ans = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j >= 1; j--) {
      ans[j] = (ans[j] || 0) + (ans[j - 1] || 0);
    }
  }
  return ans;
};

// @lc code=end

console.log(getRow(2)); // [1,2,1]
console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(4)); // [1,4,6,4,1]
console.log(getRow(5)); // [1,5,10,10,5,1]
