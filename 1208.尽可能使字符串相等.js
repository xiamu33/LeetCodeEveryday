/*
 * @lc app=leetcode.cn id=1208 lang=javascript
 *
 * [1208] 尽可能使字符串相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  const getCost = (a, b) => Math.abs(a.charCodeAt() - b.charCodeAt());
  let left = 0, right = 0, totalCost = 0;
  while (right < s.length) {
    totalCost += getCost(s[right], t[right]);
    if (totalCost > maxCost) {
      totalCost -= getCost(s[left], t[left]);
      left++;
    }
    right++;
  }
  return right - left;
};

// @lc code=end

console.log(equalSubstring("abcd", "bcdf", 3)); // 3
console.log(equalSubstring("abcd", "cdef", 3)); // 1
console.log(equalSubstring("abcd", "acde", 0)); // 1
