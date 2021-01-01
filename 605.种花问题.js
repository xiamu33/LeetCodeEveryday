/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // * 避免讨论边界条件，只要有三个连续的0就可以种花
  // const expandFlowerBed = [0, ...flowerbed, 0];
  // 1. 先找出有连续0的位置并记录数量，在判断有可种花的位置
  // const emptyFlowerBed = [];
  // let emptyNum = 0;
  // for (let i = 0; i < expandFlowerBed.length; i++) {
  //   if (expandFlowerBed[i] === 0) emptyNum++;
  //   else if (emptyNum) {
  //     emptyFlowerBed.push(emptyNum);
  //     emptyNum = 0;
  //   }
  // }
  // if (emptyNum) emptyFlowerBed.push(emptyNum);
  // let restNum = n;
  // for (let i = 0; i < emptyFlowerBed.length; i++) {
  //   restNum -= (emptyFlowerBed[i] - 1) / 2 >>> 0;
  //   if (restNum <= 0) return true;
  // }
  // return false;

  // 2. 一次循环提高效率
  let count = 1; // 初始值设为1，等价于在数组前面添加0
  let restNum = n;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) count++;
    else count = 0;
    if (count === 3) {
      restNum--;
      if (restNum <= 0) return true;
      count = 1;
    }
  }
  // 处理结尾2个0的情况
  if (count === 2) restNum--
  return restNum <= 0;
};

// @lc code=end

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
