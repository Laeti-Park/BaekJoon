// https://school.programmers.co.kr/learn/courses/30/lessons/181918

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = arr => {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      i--;
    }
  }
  return stk;
};