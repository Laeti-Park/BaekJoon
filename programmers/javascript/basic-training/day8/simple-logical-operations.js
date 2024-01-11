// https://school.programmers.co.kr/learn/courses/30/lessons/181917

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
  const array = input.map(item => item === 1);
  const answer = solution(array[0], array[1], array[2], array[3]);
  console.log(answer);
});

const solution = (x1, x2, x3, x4) => {
  const operation1 = (x1 || x2);
  const operation2 = (x3 || x4);
  return operation1 && operation2;
};