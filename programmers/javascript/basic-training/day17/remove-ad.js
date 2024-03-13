// https://school.programmers.co.kr/learn/courses/30/lessons/181870

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let strArr = '';

rl.on('line', (line) => {
  strArr = line;
  rl.close();
}).on('close', () => {
  const answer = solution(strArr);
  console.log(answer);
});

const solution = strArr => {
  return strArr.filter(str => !str.includes('ad'));
};