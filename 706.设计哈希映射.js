/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  // 1. 数组 (228 ms 47.7 MB)(56.52% 38.26%)
  this.primeNum = 769;
  this.map = Array.from({ length: this.primeNum }).map(() => []);
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const { x, y } = this.getPos(key);
  this.map[x][y] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const { x, y } = this.getPos(key);
  const rst = this.map[x][y];
  return rst == null ? -1 : rst;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const { x, y } = this.getPos(key);
  this.map[x][y] = null;
};

MyHashMap.prototype.getPos = function (key) {
  return {
    x: key % this.primeNum,
    y: key / this.primeNum | 0
  };
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

