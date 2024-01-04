// https://school.programmers.co.kr/learn/courses/30/lessons/181926

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
  const answer = solution(input[0], input[1], input[2]);
  console.log(answer);
});

const solution = (a, b, n) => {
  let sum = 0;
  let num = n;
  while (true) {
    if (num / a < 1) {
      break;
    }

    const exchange = Math.floor(num / a);
    sum += exchange * b;
    num = exchange * b + (num % a);
  }

  return sum;
};