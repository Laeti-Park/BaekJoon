// https://school.programmers.co.kr/learn/courses/30/lessons/181898

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let idx = '';
let arr = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ').map(Number);
  } else {
    idx = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(idx, arr);
  console.log(answer);
});

const solution = (arr, idx) => {
  return arr.indexOf(1, idx);
};