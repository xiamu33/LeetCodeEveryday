/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  // 1. 普通遍历一次
  // const ans = [];
  // let pos = [0, 0];
  // let cache = s[0];
  // for (let i = 1; i < s.length; i++) {
  //   if (s[i] === cache) pos[1]++;
  //   else {
  //     if (pos[1] - pos[0] >= 2) ans.push([...pos]);
  //     cache = s[i];
  //     pos = [i, i];
  //   }
  // }
  // if (pos[1] - pos[0] >= 2) ans.push([...pos]);
  // return ans;

  // 2. 正则
  const reg = /(.)\1{2,}/g;
  const matchRst = s.matchAll(reg);
  return Array.from(matchRst, v => [v.index, v.index + v[0].length - 1]);
};

// @lc code=end

console.log(largeGroupPositions("abbxxxxzzyyyy"));
