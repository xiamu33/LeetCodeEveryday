/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // 1. 自带reduce (92 ms 38 MB)(击败18%。。丢人)
  // if (nums.length <= 1) return nums.map(String);
  // const ans = [];
  // let cache = [nums[0]];
  // nums.reduce((pre, cur) => {
  //   if (cur === pre + 1) {
  //     cache[1] = cur;
  //   } else {
  //     ans.push(cache[1] ? `${cache[0]}->${cache[1]}` : `${cache[0]}`);
  //     cache = [cur];
  //   }
  //   return cur;
  // });
  // if (cache.length) ans.push(cache[1] ? `${cache[0]}->${cache[1]}` : `${cache[0]}`);
  // return ans;

  // 2. 遍历 (84 ms 37.8 MB)
  if (nums.length <= 1) return nums.map(String);
  const ans = [];
  const len = nums.length;
  let i = 0;
  while (i < len) {
    const left = i;
    i++;
    while (i < len && nums[i] === nums[i - 1] + 1) {
      i++;
    }
    const right = i - 1;
    const temp = left < right
      ? nums[left] + '->' + nums[right]
      : nums[left] + ''
    ans.push(temp);
  }
  return ans;
};

// @lc code=end

console.log(summaryRanges([])); // []
console.log(summaryRanges([-1])); // ["-1"]
console.log(summaryRanges([0, 1, 2, 4, 5, 7, 9])); // ["0->2","4->5","7","9"]