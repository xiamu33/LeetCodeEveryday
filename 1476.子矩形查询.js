/*
 * @lc app=leetcode.cn id=1476 lang=javascript
 *
 * [1476] 子矩形查询
 */

// @lc code=start
/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function(rectangle) {
  this.matrix = [];
  const rowLen = rectangle.length;
  const colLen = rectangle[0].length;
  for (let i = 0; i < rowLen; i++) {
    this.matrix[i] = Array.from({ length: colLen });
    for (let j = 0; j < colLen; j++) {
      this.matrix[i][j] = rectangle[i][j];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      this.matrix[i][j] = newValue;
    }
  }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
  return this.matrix[row]?.[col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
// @lc code=end

const subrectangle = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]])
console.log('subrectangle: ', subrectangle.matrix);
console.log(subrectangle.updateSubrectangle(0,0,2,1,3));
console.log('subrectangle: ', subrectangle.matrix);
console.log(subrectangle.getValue(3,1));
