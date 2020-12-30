/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length <= 1) return stones[0] || 0;
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const restStone = stones.pop() - stones.pop();
    if (restStone) {
      const insertIndex = stones.findIndex(w => w >= restStone);
      if (insertIndex === -1) stones.push(restStone);
      else stones.splice(insertIndex, 0, restStone);
    }
  }
  return stones[0] || 0;
};

// @lc code=end

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
