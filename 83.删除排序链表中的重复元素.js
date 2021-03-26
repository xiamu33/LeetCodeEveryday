/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
  // 1. 遍历 (92 ms 40.2 MB)(85.06% 5.12%)
  const map = {};
  const dummy = new ListNode(null, head);
  let cur = head;
  let ans = dummy;
  while (cur) {
    if (!map[cur.val]) {
      map[cur.val] = 0;
      ans.next = new ListNode(cur.val);
      ans = ans.next;
    }
    map[cur.val]++;
    cur = cur.next;
  }
  return dummy.next;
};

// @lc code=end
