// https://school.programmers.co.kr/learn/courses/30/lessons/181852

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numList = [];

rl.on('line', (line) => {
  numList = line.split(' ');
  rl.close();
}).on('close', () => {
  const answer = solution(numList);
  console.log(answer);
});

const solution = (numList) => {
  return numList.sort((a, b) => a - b).slice(5);
};