/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 1. 先拆后并 (88 ms 39.4 MB)(91.17% 71.82%)
  // if (!head || !head.next  || k === 0) return head;
  // let n = 1, last = head;
  // while (last.next) {
  //   n++;
  //   last = last.next;
  // }
  // const c = n - k % n;
  // if (c === n) return head;
  // const dummy = new ListNode();
  // let cur = head;
  // for (let i = 1; i < c; i++) {
  //   cur = cur.next;
  // }
  // dummy.next = cur.next;
  // cur.next = null;
  // last.next = head;
  // return dummy.next;

  // 2. 闭环拆环 (84 ms 38.9 MB)(96.37% 99.12%)
  if (!head || !head.next  || k === 0) return head;
  let n = 1, cur = head;
  while (cur.next) {
    n++;
    cur = cur.next;
  }
  const c = n - k % n;
  if (c === n) return head;
  cur.next = head;
  for (let i = 0; i < c; i++) {
    cur = cur.next;
  }
  const ans = cur.next;
  cur.next = null;
  return ans;
};

// @lc code=end
