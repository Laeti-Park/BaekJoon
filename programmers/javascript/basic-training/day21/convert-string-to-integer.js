// https://school.programmers.co.kr/learn/courses/30/lessons/181849

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numStr = [];

rl.on('line', (line) => {
  numStr = line;
  rl.close();
}).on('close', () => {
  const answer = solution(numStr);
  console.log(answer);
});

const solution = nStr => Number(nStr);