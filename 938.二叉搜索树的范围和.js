/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // 1. 中序遍历 (O(n) O(n))(236 ms 64.1 MB)(86.82% 79.32%)
  // let ans = 0;
  // const inOrderTraversal = node => {
  //   if (!node) return;
  //   inOrderTraversal(node.left);
  //   if (node.val >= low && node.val <= high) ans += node.val;
  //   inOrderTraversal(node.right);
  // }
  // inOrderTraversal(root)
  // return ans;

  // 2. dfs (O(n) O(n))(228 ms 64.4 MB)(97.05% 56.36%)
  if (!root) return 0;
  if (root.val > high) return rangeSumBST(root.left, low, high);
  if (root.val < low) return rangeSumBST(root.right, low, high);
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

// @lc code=end
