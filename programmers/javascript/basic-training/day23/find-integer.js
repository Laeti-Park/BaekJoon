// https://school.programmers.co.kr/learn/courses/30/lessons/181840

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numList = [];
let n = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    numList = line.split(' ').map(Number);
  } else {
    n = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(numList, n);
  console.log(answer);
});

const solution = (numList, n) => {
  return numList.includes(n) ? 1 : 0;
};