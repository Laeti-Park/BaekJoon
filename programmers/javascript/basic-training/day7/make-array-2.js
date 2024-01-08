// https://school.programmers.co.kr/learn/courses/30/lessons/181921

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

const solution = (l, r) => {
  let answer = [];
  for (let i = l; i <= r; i++) {
    let arr = String(i);
    if (![...arr].every(x => x === '5' || x === '0')) continue;
    answer.push(i);
  }

  return answer.length ? answer : [-1];
};