// https://school.programmers.co.kr/learn/courses/30/lessons/181845

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nStrArray = [];

rl.on('line', (line) => {
  nStrArray = line;
  rl.close();
}).on('close', () => {
  const answer = solution(nStrArray[0], nStrArray[1]);
  console.log(answer);
});

const solution = (a, b) => {
  return String(BigInt(a) + BigInt(b));
};