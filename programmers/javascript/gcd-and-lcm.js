// https://school.programmers.co.kr/learn/courses/30/lessons/12940

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];
let count = 0;

rl.on('line', line => {
  input.push(line);
  count++;

  if (count > 1) {
    rl.close();
  }

}).on('close', () => {
  const answer = solution(input[0], input[1]);
  console.log(answer);
});

const solution = (n, m) => {
  let a = n;
  let b = m;

  if (n < m) {
    const temp = a;
    a = b;
    b = temp;
  }

  let c = a, d = b;

  while (b !== 0) {
    n = a % b;
    a = b;
    b = n;
  }

  return [a, Math.floor(c * d / a)];
};