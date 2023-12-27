// https://school.programmers.co.kr/learn/courses/30/lessons/181939

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  const answer = solution(input[0], input[1]);
  console.log(answer);
});

function solution(a, b) {
  return Number(a + b) < Number(b + a) ? Number(b + a) : Number(a + b);
}