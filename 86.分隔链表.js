/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let ltPoint = new ListNode(0);
  const ltHead = ltPoint;
  let gtPoint = new ListNode(0);
  const gtHead = gtPoint;
  while (head) {
    if (head.val < x) ltPoint = ltPoint.next = head;
    else gtPoint = gtPoint.next = head;
    head = head.next;
  }
  gtPoint.next = null;
  ltPoint.next = gtHead.next;
  return ltHead.next;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// @lc code=end

