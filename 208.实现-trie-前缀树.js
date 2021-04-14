/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
// class Trie {
//   // 1. 数组 (636 ms 47.9 MB)(5.01% 98.43%)
//   constructor() {
//     this.list = [];
//   }
//   insert(word) {
//     this.list.push(word);
//   }
//   search(word) {
//     return !!this.list.find(s => s === word);
//   }
//   startsWith(prefix) {
//     return !!this.list.find(s => s.startsWith(prefix));
//   }
// }

class Trie {
  // 2. 字典树 (252 ms 52.5 MB)(51.07% 74.67%)
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = {};
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node[c]) node[c] = {};
      node = node[c];
    }
    node.isEnd = true;
  }
  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (const c of word) {
      if (!node[c]) return false;
      node = node[c];
    }
    return !!node && !!node.isEnd;
  }
  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node[c]) return false;
      node = node[c];
    }
    return !!node;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

