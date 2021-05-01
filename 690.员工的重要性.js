/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  // 1. 递归 (O(n) O(n))(120 ms 41.8 MB)(17.27% 30.91%)
  // const map = {};
  // for (const employee of employees) {
  //   map[employee.id] = employee;
  // }
  // let ans = 0;
  // const addImportance = employeeId => {
  //   const employee = map[employeeId];
  //   ans += employee.importance;
  //   for (const subordinateId of employee.subordinates) {
  //     addImportance(subordinateId);
  //   }
  // }
  // addImportance(id);
  // return ans;

  // 2. dfs (O(n) O(n))(92 ms 41.7 MB)(86.82% 32.28%)
  // const map = {};
  // for (const employee of employees) {
  //   map[employee.id] = employee;
  // }
  // const dfs = id => {
  //   const employee = map[id];
  //   let sum = employee.importance;
  //   for (const subId of employee.subordinates) {
  //     sum += dfs(subId);
  //   }
  //   return sum;
  // }
  // return dfs(id);

  // 3. bfs (O(n) O(n))(100 ms 41.4 MB)(69.09% 39.55%)
  const map = {};
  for (const employee of employees) {
    map[employee.id] = employee;
  }
  let ans = 0;
  const queue = [id];
  while (queue.length) {
    const employeeId = queue.shift();
    const employee = map[employeeId];
    ans += employee.importance;
    queue.push(...employee.subordinates);
  }
  return ans;
};

// @lc code=end
