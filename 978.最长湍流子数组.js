/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  // 1. 双指针 (96 ms 43.7 MB)
  let ans = 0;
  let left = 0, right = 1;
  let preSign = null;
  while (right < arr.length) {
    let sign = null;
    if (arr[right] > arr[right - 1]) sign = 1;
    else if (arr[right] < arr[right - 1]) sign = -1;
    else sign = null;

    if (sign === preSign || sign == null) {
      ans = Math.max(ans, right - left);
      if (sign == null) left = right;
      else left = right - 1;
    }
    preSign = sign;
    right++;
  }
  ans = Math.max(ans, right - left);
  return ans;
};

// @lc code=end

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])); // 5
console.log(maxTurbulenceSize([4, 8, 12, 16])); // 2
console.log(maxTurbulenceSize([4, 8, 8, 16])); // 2
console.log(maxTurbulenceSize([100])); // 1
console.log(maxTurbulenceSize([2, 0, 2, 4, 2, 5, 0, 1, 2, 3])); // 6
console.log(maxTurbulenceSize([2, 0, 2, 2, 2, 5, 0, 1, 2, 3])); // 4
console.log(maxTurbulenceSize([2, 0, 2, 2, 1, 5, 0, 1, 2, 3])); // 5
console.log(maxTurbulenceSize([2, 0, 2, 2, 1, 5, 0, 1, 0, 3])); // 7
