/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  */
// var BSTIterator = function (root) {
//   // 1. 扁平化 (148 ms 49.5 MB)(89.49% 83.12%)
//   this.list = [];
//   this.inOrderTraversal(root, this.list);
//   this.idx = 0;
// };

// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function () {
//   return this.list[this.idx++];
// };

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function () {
//   return this.idx < this.list.length;
// };

// BSTIterator.prototype.inOrderTraversal = function (root, list) {
//   if (!root) return;
//   this.inOrderTraversal(root.left, list);
//   list.push(root.val);
//   this.inOrderTraversal(root.right, list);
// };

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  // 2. 栈 (152 ms 50.3 MB)(83.12% 14.01%)
  this.stack = [];
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const ans = this.stack.pop();
  let cur = ans.right;
  while (cur) {
    this.stack.push(cur);
    cur = cur.left;
  }
  return ans.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

