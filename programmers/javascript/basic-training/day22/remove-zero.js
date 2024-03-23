// https://school.programmers.co.kr/learn/courses/30/lessons/181847

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nStr = '';

rl.on('line', (line) => {
  nStr = line;
  rl.close();
}).on('close', () => {
  const answer = solution(nStr);
  console.log(answer);
});

const solution = (nStr) => {
  return String(Number(nStr));
};