/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  // 1. 数组 (208 ms 48.5 MB)(61.61% 12.50%)
  this.primeNum = 769;
  this.set = Array.from({ length: this.primeNum }).map(() => []);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const { x, y } = this.getPos(key);
  this.set[x][y] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const { x, y } = this.getPos(key);
  this.set[x][y] = false;
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const { x, y } = this.getPos(key);
  return !!this.set[x][y];
};

MyHashSet.prototype.getPos = function (key) {
  return {
    x: key % this.primeNum,
    y: key / this.primeNum | 0
  };
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

