// https://school.programmers.co.kr/learn/courses/30/lessons/181929

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
  const answer = solution(input);
  console.log(answer);
});

const solution = (num_list) => {
  const product = num_list.reduce((acc, curr) => acc * curr, 1);
  const sum = (num_list.reduce((acc, curr) => acc + curr, 0)) ** 2;
  return product < sum ? 1 : 0;
};