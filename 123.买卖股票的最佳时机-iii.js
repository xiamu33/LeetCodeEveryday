/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1. 将数组分为若干组单调不递减数组，即为每次最大利润可操作交易，取其中最大两次即可
  // 不太可行
  // const transactionSlice = [];
  // let slice = [];
  // for (const price of prices) {
  //   if (!slice.length) slice.push(price);
  //   else if (price >= slice[slice.length - 1]) slice.push(price);
  //   else {
  //     transactionSlice.push(slice);
  //     slice = [price];
  //   }
  // }
  // if (slice.length) transactionSlice.push(slice);
  // console.log('transactionSlice: ', transactionSlice);
  // if (transactionSlice.length === prices.length) return 0;
  // const profits = transactionSlice.map(slice => slice[slice.length - 1] - slice[0]).sort((a, b) => b - a);
  // return profits[0] + (profits[1] || 0);

  // 2. 动态规划 (112 ms 48.1 MB)
  const len = prices.length;
  if (!len) return 0;
  let buy1 = -prices[0];
  let sell1 = 0;
  let buy2 = -prices[0];
  let sell2 = 0;
  for (let i = 0; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};

// @lc code=end

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 6
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])); // 13
