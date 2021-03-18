/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 1. (72 ms 37.6 MB)(96.77% 97.37%)
  const dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  const leftNode = pre.next;
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  const remainNode = rightNode.next;
  pre.next = null;
  rightNode.next = null;
  const reverseLinkedList = head => {
    let pre = null;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
  }
  reverseLinkedList(leftNode);
  pre.next = rightNode;
  leftNode.next = remainNode;
  return dummy.next;
};

// @lc code=end

