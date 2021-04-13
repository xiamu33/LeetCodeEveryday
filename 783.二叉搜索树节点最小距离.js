/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
 * @return {number}
 */
var minDiffInBST = function (root) {
  // 1. 中序遍历 (96 ms 39.3 MB)(30.92% 75.36%)
  let ans = Infinity, pre = null;
  const inOrderTraversal = root => {
    if (!root) return;
    inOrderTraversal(root.left);
    if (pre) ans = Math.min(ans, root.val - pre.val);
    pre = root;
    inOrderTraversal(root.right);
  }
  inOrderTraversal(root);
  return ans;
};

// @lc code=end
