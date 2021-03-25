/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 1. 两次遍历 (84 ms 39.4 MB)(93.28% 71.41%)
  const map = {};
  let idx = head;
  while (idx) {
    if (!map[idx.val]) map[idx.val] = 0;
    map[idx.val]++;
    idx = idx.next;
  }
  idx = head;
  const dummy = new ListNode();
  let ans = dummy;
  while (idx) {
    if (map[idx.val] === 1) {
      ans.next = new ListNode(idx.val);
      ans = ans.next;
    }
    idx = idx.next;
  }
  return dummy.next;
};

// @lc code=end

