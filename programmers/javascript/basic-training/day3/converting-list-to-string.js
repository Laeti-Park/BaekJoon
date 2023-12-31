// https://school.programmers.co.kr/learn/courses/30/lessons/181941

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
  const answer = solution(input);
  console.log(answer);
});

const solution = arr => arr.join('');