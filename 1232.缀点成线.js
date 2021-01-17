/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // 1. 数学 (92 ms 39.6 MB)
  // const deltaX = coordinates[0][0], deltaY = coordinates[0][1];
  // const n = coordinates.length;
  // for (let i = 0; i < n; i++) {
  //   coordinates[i][0] -= deltaX;
  //   coordinates[i][1] -= deltaY;
  // }
  // const A = coordinates[1][1], B = -coordinates[1][0];
  // for (let i = 2; i < n; i++) {
  //   const [x, y] = [coordinates[i][0], coordinates[i][1]];
  //   if (A * x + B * y !== 0) {
  //     return false;
  //   }
  // }
  // return true;

  // 1. reduce (68 ms 39.3 MB)
  let ans = true;
  const [x0, y0] = coordinates[0];
  coordinates.reduce((p, c, i, arr) => {
    const [p_x, p_y] = p, [c_x, c_y] = c;
    if ((p_x - x0) * (c_y - y0) !== (c_x - x0) * (p_y - y0)) {
      arr.splice(1); // 中断reduce
      ans = false;
    }
    return c;
  })
  return ans;
};

// @lc code=end

console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])); // true
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])); // false
