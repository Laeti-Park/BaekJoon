// https://school.programmers.co.kr/learn/courses/30/lessons/181920

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

const solution = (start_num, end_num) => {
  let result = [];
  for (let i = start_num; i <= end_num; i++) {
    result.push(i);
  }
  return result;
};