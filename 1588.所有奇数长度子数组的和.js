/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarray = function (arr) {
  // * 计算每个位置作为奇数子数组出现的次数
  // ! 以下方案存在性能问题，瓶颈可能在`Math.min`
  // 1. 站在子数组角度解题
  // const arrLen = arr.length;
  // const oddArr = Array.from({ length: (arrLen + 1) / 2 }, (v, i) => 2 * i + 1);
  // let sum = 0;
  // for (const len of oddArr) {
  //   for (let i = 0; i < arrLen; i++) {
  //     const sumTimes = Math.min(len, i + 1, arrLen - i, arrLen - len + 1);
  //     sum += arr[i] * sumTimes;
  //   }
  // }
  // return sum;

  // 2. 站在原数组元素角度解题，讨论某个元素能组成奇数子数组的情况
  // 元素两边都是奇数个数的情况+都是偶数个数（需考虑0个）的情况
  const l = arr.length;
  let sum = 0;
  for (let i = 0; i < l; i++) {
    const lOdd = (i + 1) / 2 >>> 0;
    const rOdd = (l - i) / 2 >>> 0;
    const lEven = (i / 2 >>> 0) + 1;
    const rEven = ((l - i - 1) / 2 >>> 0) + 1;
    sum += arr[i] * (lOdd * rOdd + lEven * rEven);
  }
  return sum;
};

// @lc code=end

console.log(sumOddLengthSubarray([1, 4, 2, 5, 3]));
console.log(sumOddLengthSubarray([10, 11, 12]));
