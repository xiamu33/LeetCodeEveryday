/*
 * @lc app=leetcode.cn id=1603 lang=javascript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  // 1. 数组 (160 ms 44.9 MB)(83.05% 56.42%)
  this.parking = [big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  return --this.parking[carType - 1] >= 0;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end

