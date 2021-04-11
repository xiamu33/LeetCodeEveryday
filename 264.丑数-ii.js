/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 1. 三指针 (72 ms 41.4 MB)(100.00% 70.37%)
  if (n === 1) return 1;
  const arr = [1];
  let idx2 = 0, idx3 = 0, idx5 = 0;
  let val2 = 1, val3 = 1, val5 = 1;
  while (arr.length < n) {
    const min = Math.min(val2 * 2, val3 * 3, val5 * 5);
    if (min > arr[arr.length - 1]) arr.push(min);
    switch (min) {
      case val2 * 2: val2 = arr[++idx2]; break;
      case val3 * 3: val3 = arr[++idx3]; break;
      case val5 * 5: val5 = arr[++idx5]; break;
    }
  }
  return arr[n - 1];
};

// @lc code=end

console.log(nthUglyNumber(10)); // 12
