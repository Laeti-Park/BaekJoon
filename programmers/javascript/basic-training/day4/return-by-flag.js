// https://school.programmers.co.kr/learn/courses/30/lessons/181933

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
  const answer = solution(Number(input[0]), Number(input[1]), Boolean(input[2]));
  console.log(answer);
});

const solution = (a, b, flag) => flag ? a + b : a - b;