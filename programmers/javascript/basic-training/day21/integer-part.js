// https://school.programmers.co.kr/learn/courses/30/lessons/181850

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let flo = [];

rl.on('line', (line) => {
  flo = Number(line);
  rl.close();
}).on('close', () => {
  const answer = solution(flo);
  console.log(answer);
});

const solution = (flo) => {
  return Math.floor(flo);
};