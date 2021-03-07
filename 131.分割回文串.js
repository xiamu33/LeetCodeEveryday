/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // 回溯+动态规划 (276 ms 60.4 MB)(85.38% 73.79%)
  const n = s.length;
  const memo = Array.from({ length: n }).map(() => Array.from({ length: n }).fill(true));
  const ans = [], stack = [];
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      memo[i][j] = memo[i + 1][j - 1] && (s[i] === s[j]);
    }
  }
  const dfs = i => {
    if (i === n) return ans.push(stack.slice());
    for (let j = i; j < n; j++) {
      if (memo[i][j]) {
        stack.push(s.slice(i, j + 1));
        dfs(j + 1);
        stack.pop();
      }
    }
  }
  dfs(0);
  return ans;
};

// @lc code=end

console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
