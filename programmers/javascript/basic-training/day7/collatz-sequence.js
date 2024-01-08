// https://school.programmers.co.kr/learn/courses/30/lessons/181919

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const answer = solution(Number(input));
  console.log(answer);
});

const solution = n => {
  let answer = [];
  while (n !== 1) {
    answer.push(n);
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  }

  answer.push(1);
  return answer;
};