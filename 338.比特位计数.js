/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  // 1. 分奇偶讨论 (116 ms 43.4 MB)(52.53% 83.87%)
  // const ans = Array.from({ length: num + 1 }).fill(0);
  // for (let n = 1; n <= num; n++) {
  //   if (n % 2 === 0) ans[n] = ans[n / 2];
  //   else ans[n] = ans[n - 1] + 1;
  // }
  // return ans;

  // 2. dp-最低有效位 (120 ms 43.2 MB)(43.55% 96.54%)
  // const ans = Array.from({ length: num + 1 }).fill(0);
  // for (let n = 1; n <= num; n++) {
  //   ans[n] = ans[n >> 1] + (n & 1);
  // }
  // return ans;

  // 3. dp-最高有效位 (124 ms 43.4 MB)(35.25% 84.10%)
  // const ans = Array.from({ length: num + 1 }).fill(0);
  // let highBit = 0;
  // for (let n = 1; n <= num; n++) {
  //   if ((n & (n - 1)) === 0) highBit = n;
  //   ans[n] = ans[n - highBit] + 1;
  // }
  // return ans;

  // 4. dp-最低设置位 (112 ms 43.3 MB)(70.74% 89.63%)
  const ans = Array.from({ length: num + 1 }).fill(0);
  for (let n = 1; n <= num; n++) {
    ans[n] = ans[n & (n - 1)] + 1;
  }
  return ans;
};

// @lc code=end

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]
