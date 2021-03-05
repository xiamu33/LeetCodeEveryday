/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

// 1. 双栈 (108 ms 37.2 MB)(5.35% 69.38%)
// var MyQueue = function () {
//   this.inStack = [];
//   this.outStack = [];
// };

// MyQueue.prototype.push = function (x) {
//   this.inStack.push(x);
// };

// MyQueue.prototype.pop = function () {
//   if (!this.outStack.length) this.moveStack();
//   return this.outStack.pop();
// };

// MyQueue.prototype.peek = function () {
//   if (!this.outStack.length) this.moveStack();
//   return this.outStack[this.outStack.length - 1];
// };

// MyQueue.prototype.empty = function () {
//   return !this.inStack.length && !this.outStack.length;
// };

// MyQueue.prototype.moveStack = function () {
//   while (this.inStack.length) {
//     this.outStack.push(this.inStack.pop());
//   }
// }

// 2. 数组+双指针 (68 ms 37.7 MB)(98.89% 11.69%)
var MyQueue = function () {
  this.list = [];
  this.left = 0;
  this.right = 0;
};

MyQueue.prototype.push = function (x) {
  this.list[this.right++] = x;
};

MyQueue.prototype.pop = function () {
  if (this.empty()) return null;
  return this.list[this.left++];
};

MyQueue.prototype.peek = function () {
  if (this.empty()) return null;
  return this.list[this.left];
};

MyQueue.prototype.empty = function () {
  return this.left >= this.right;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
