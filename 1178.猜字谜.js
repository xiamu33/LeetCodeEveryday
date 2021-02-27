/*
 * @lc app=leetcode.cn id=1178 lang=javascript
 *
 * [1178] 猜字谜
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
  // 1. 暴力破解 (超时。。)
  // const ans = [];
  // for (let i = 0; i < puzzles.length; i++) {
  //   const puzzle = puzzles[i];
  //   const puzzleMap = {};
  //   for (let j = 0; j < puzzle.length; j++) {
  //     puzzleMap[puzzle[j]] = 1;
  //   }
  //   const letter = puzzle[0];
  //   let count = 0;
  //   for (const word of words) {
  //     let c = 0;
  //     for (const s of word) {
  //       if (!puzzleMap[s]) { c = 0; break; }
  //       if (s === letter) c = 1;
  //     }
  //     if (c) count++;
  //   }
  //   ans[i] = count;
  // }
  // return ans;

  // 2. 二进制状态压缩 (340 ms 60 MB)
  const colFreq = new Map();
  const getCharDiff = c => c.charCodeAt() - 'a'.charCodeAt();
  const countOne = n => {
    const str = n.toString(2);
    let count = 0;
    for (const ch of str) {
      if (parseInt(ch) === 1) count++;
    }
    return count;
  }
  for (const word of words) {
    let mask = 0;
    for (const ch of word) {
      mask |= (1 << getCharDiff(ch));
    }
    if (countOne(mask) <= 7) {
      colFreq.set(mask, (colFreq.get(mask) || 0) + 1);
    }
  }
  const ans = [];
  for (const puzzle of puzzles) {
    let total = 0;
    let mask = 0;
    for (let i = 1; i < 7; ++i) {
      mask |= (1 << getCharDiff(puzzle[i]));
    }
    let subset = mask;
    while (subset) {
      let s = subset | (1 << getCharDiff(puzzle[0]));
      if (colFreq.has(s)) total += colFreq.get(s);
      subset = (subset - 1) & mask;
    }
    if (colFreq.has(1 << getCharDiff(puzzle[0]))) {
      total += colFreq.get(1 << getCharDiff(puzzle[0]));
    }
    ans.push(total);
  }
  return ans;
};

// @lc code=end

console.log(findNumOfValidWords(
  ["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
  ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]
)); // [1,1,3,2,4,0]
