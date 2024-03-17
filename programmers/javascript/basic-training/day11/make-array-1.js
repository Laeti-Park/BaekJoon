// https://school.programmers.co.kr/learn/courses/30/lessons/181901

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
  const answer = solution(input[0], input[1]);
  console.log(answer);
});

const solution = (n, k) => {
  let array = [];
  for (let i = k; i <= n; i += k) {
    array.push(i);
  }

  return array;
};