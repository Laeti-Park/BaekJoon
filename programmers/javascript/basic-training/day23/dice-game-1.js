// https://school.programmers.co.kr/learn/courses/30/lessons/181839

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 0;
let b = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    a = Number(line);
  } else {
    b = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(a, b);
  console.log(answer);
});

const solution = (a, b) => {
  if (a % 2 === 0 && b % 2 === 0) {
    return Math.abs(a - b);
  } else if (a % 2 === 1 && b % 2 === 1) {
    return a ** 2 + b ** 2;
  } else {
    return 2 * (a + b);
  }
};