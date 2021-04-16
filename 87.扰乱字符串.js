/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  // 1. dp
  // TODO (不会做。。)
  const n = s1.length;
  const memo = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n + 1).fill(0)));

  const dfs = function (i1, i2, length, s1, s2, memo) {
    if (memo[i1][i2][length] !== 0) {
      return memo[i1][i2][length] === 1;
    }
    // 判断两个子串是否相等
    if (s1.slice(i1, i1 + length) === s2.slice(i2, i2 + length)) {
      memo[i1][i2][length] = 1;
      return true;
    }
    // 判断是否存在字符 c 在两个子串中出现的次数不同
    if (!checkIfSimilar(i1, i2, length, s1, s2)) {
      memo[i1][i2][length] = -1;
      return false;
    }
    // 枚举分割位置
    for (let i = 1; i < length; ++i) {
      // 不交换的情况
      if (dfs(i1, i2, i, s1, s2, memo) && dfs(i1 + i, i2 + i, length - i, s1, s2, memo)) {
        memo[i1][i2][length] = 1;
        return true;
      }
      // 交换的情况
      if (dfs(i1, i2 + length - i, i, s1, s2, memo) && dfs(i1 + i, i2, length - i, s1, s2, memo)) {
        memo[i1][i2][length] = 1;
        return true;
      }
    }
    memo[i1][i2][length] = -1;
    return false;
  }
  const checkIfSimilar = function (i1, i2, length, s1, s2) {
    const freq = new Map();
    for (let i = i1; i < i1 + length; ++i) {
      const c = s1[i];
      freq.set(c, (freq.get(c) || 0) + 1);
    }
    for (let i = i2; i < i2 + length; ++i) {
      const c = s2[i];
      freq.set(c, (freq.get(c) || 0) - 1);
    }
    for (const value of freq.values()) {
      if (value !== 0) {
        return false;
      }
    }
    return true;
  }
  return dfs(0, 0, n, s1, s2, memo);

  // TODO 2. 前缀和+后缀和
  // const charCodeA = 'a'.charCodeAt();
  // const charDic = {};
  // for (let i = 0; i < 26; i++) {
  //   charDic[String.fromCharCode(charCodeA + i)] = 2 ** i;
  // }
  // const n = s1.length;
  // const prefixSum1 = [], suffixSum1 = [];
  // const prefixSum2 = [], suffixSum2 = [];
  // for (let i = n - 1; i >= 0; i--) {
  //   if (i >= n - 2) {
  //     suffixSum1[i] = charDic[s1[i + 1]] || 0;
  //     suffixSum2[i] = charDic[s1[i + 1]] || 0;
  //   } else {
  //     suffixSum1[i] = suffixSum1[i + 1] + charDic[s1[i + 1]];
  //     suffixSum2[i] = suffixSum2[i + 1] + charDic[s2[i + 1]];
  //   }
  // }
  // for (let i = 0; i < n; i++) {
  //   if (i === 0) {
  //     prefixSum1[i] = charDic[s1[i]];
  //     prefixSum2[i] = charDic[s2[i]];
  //   } else {
  //     prefixSum1[i] = prefixSum1[i - 1] + charDic[s1[i]];
  //     prefixSum2[i] = prefixSum2[i - 1] + charDic[s2[i]];
  //   }
  //   if (prefixSum1[i] === prefixSum2[i] && suffixSum1[i] === suffixSum2[i]) return true;
  // }
  // return false;
};

// @lc code=end

console.log(isScramble("great", "rgeat")); // true
console.log(isScramble("abcde", "caebd")); // false
