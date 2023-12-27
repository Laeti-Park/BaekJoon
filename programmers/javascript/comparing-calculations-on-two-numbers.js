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


const solution = (a, b) => {
  const c = String(a);
  const d = String(b);

  return Number(c + d) > 2 * a * b ? Number(c + d) : 2 * a * b;
};