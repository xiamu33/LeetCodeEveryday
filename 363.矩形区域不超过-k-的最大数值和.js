/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  // 1. 二维前缀和 (O(m^2*n^2) O(m*n))(568 ms 39.4 MB)(32.43% 91.89%)
  // const m = matrix.length, n = matrix[0].length;
  // const sum = Array.from({ length: m + 1 }).map(() => Array.from({ length: n + 1 }).fill(0));
  // for (let i = 1; i <= m; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + matrix[i - 1][j - 1];
  //   }
  // }
  // let ans = -Infinity;
  // for (let i1 = 1; i1 <= m; i1++) {
  //   for (let j1 = 1; j1 <= n; j1++) {
  //     for (let i2 = i1; i2 <= m; i2++) {
  //       for (let j2 = j1; j2 <= n; j2++) {
  //         const cur = sum[i2][j2] - sum[i1 - 1][j2] - sum[i2][j1 - 1] + sum[i1 - 1][j1 - 1];
  //         if (cur <= k) ans = Math.max(ans, cur);
  //       }
  //     }
  //   }
  // }
  // return ans;

  // 2. 二维前缀和+二分查找 (O(m^2*nlogn) O(m*n))(280 ms 45.3 MB)(58.14% 6.98%)
  // const m = matrix.length, n = matrix[0].length;
  // const sum = Array.from({ length: m + 1 }).map(() => Array.from({ length: n + 1 }).fill(0));
  // // 预处理前缀和
  // for (let i = 1; i <= m; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + matrix[i - 1][j - 1];
  //   }
  // }
  // let ans = -Infinity;
  // // 遍历上下边界
  // for (let t = 1; t <= m; t++) {
  //   for (let b = t; b <= m; b++) {
  //     const pq = new PriorityQueue();
  //     // 允许只取一列
  //     pq.insert(0);
  //     for (let r = 1; r <= n; r++) {
  //       const rSum = sum[b][r] - sum[t - 1][r];
  //       const lSum = pq.find(rSum - k);
  //       if (lSum != null) {
  //         const cur = rSum - lSum;
  //         ans = Math.max(ans, cur);
  //       }
  //       pq.insert(rSum);
  //     }
  //   }
  // }
  // return ans;

  // 3. 二维前缀和+二分查找 优化 (O(min(m,n)^2*max(m,n)*logmax(m,n)) O(max(m,n)))(208 ms 44.6 MB)(72.09% 23.26%)
  const m = matrix.length, n = matrix[0].length;
  const useRight = n > m;
  const sum = Array.from({ length: Math.max(m, n) + 1 });
  let ans = -Infinity;
  for (let i = 1; i <= (useRight ? m : n); i++) {
    sum.fill(0);
    for (let j = i; j <= (useRight ? m : n); j++) {
      const pq = new PriorityQueue();
      pq.insert(0);
      let c = 0;
      for (let l = 1; l <= (useRight ? n : m); l++) {
        sum[l] += useRight ? matrix[j - 1][l - 1] : matrix[l - 1][j - 1];
        c += sum[l];
        const p = pq.find(c - k);
        if (p != null) {
          const cur = c - p;
          ans = Math.max(ans, cur);
        }
        pq.insert(c);
      }
    }
  }
  return ans;
};

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  insert(v) {
    let l = 0, r = this.queue.length - 1;
    while (l <= r) {
      const mid = (l + r) / 2 | 0;
      if (this.queue[mid] < v) l = mid + 1;
      else r = mid - 1;
    }
    this.queue.splice(l, 0, v);
  }

  find(v) {
    let l = 0, r = this.queue.length - 1;
    while (l <= r) {
      const mid = (l + r) / 2 | 0;
      const midVal = this.queue[mid];
      if (midVal === v) return midVal;
      if (midVal < v) l = mid + 1;
      else r = mid - 1;
    }
    return this.queue[l];
  }
}

// @lc code=end

console.log(maxSumSubmatrix([[1, 0, 1], [0, -2, 3]], 2)); // 2
console.log(maxSumSubmatrix([[2, 2, -1]], 3)); // 3
console.log(maxSumSubmatrix([[5, -4, -3, 4], [-3, -4, 4, 5], [5, 1, 5, -4]], 8)); // 8
