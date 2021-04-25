/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  // 1. 中序遍历 (O(n) O(n))(80 ms 39.3 MB)(85.29% 16.82%)
  const dummy = new TreeNode();
  let pre = dummy;
  const inOrderTraversal = node => {
    if (!node) return;
    inOrderTraversal(node.left);
    pre.right = node;
    node.left = null;
    pre = pre.right;
    inOrderTraversal(node.right);
  }
  inOrderTraversal(root);
  return dummy.right;
};

// @lc code=end
