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

const solution = (start, end_num) => {
  let array = [];
  for (let i = start; i >=end_num; i--) {
    array.push(i);
  }

  return array;
};