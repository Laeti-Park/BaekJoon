// https://school.programmers.co.kr/learn/courses/30/lessons/181846

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = [];

rl.on('line', (line) => {
  n = Number(line);
  rl.close();
}).on('close', () => {
  const answer = solution(n);
  console.log(answer);
});

const solution = (n) => {
  return String(n);
};