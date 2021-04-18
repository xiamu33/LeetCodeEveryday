/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // 1. 遍历 (632 ms 39.1 MB)(56.10% 35.59%)
  // const n = nums.length;
  // for (let i = 0; i < n - 1; i++) {
  //   for (let j = i + 1; j <= i + k && j < n; j++) {
  //     if (Math.abs(nums[i] - nums[j]) <= t) return true;
  //   }
  // }
  // return false;

  // 2. 桶 (112 ms 44.3 MB)(90.13% 5.20%)
  const n = nums.length;
  const mp = new Map();
  const getId = (x, w) => {
    return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
  };
  for (let i = 0; i < n; ++i) {
    const x = nums[i];
    const id = getId(x, t + 1);
    if (mp.has(id)) return true;
    if (mp.has(id - 1) && Math.abs(x - mp.get(id - 1)) <= t) return true;
    if (mp.has(id + 1) && Math.abs(x - mp.get(id + 1)) <= t) return true;
    mp.set(id, x);
    if (i >= k) {
      mp.delete(getId(nums[i - k], t + 1));
    }
  }
  return false;
};

// @lc code=end

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)); // true
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)); // false
