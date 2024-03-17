// https://school.programmers.co.kr/learn/courses/30/lessons/181863

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rnyString = '';

rl.on('line', (line) => {
  rnyString = line;
  rl.close();
}).on('close', () => {
  const answer = solution(rnyString);
  console.log(answer);
});

const solution = rnyString => {
  return rnyString.split('').map(str => str === 'm' ? 'rn' : str).join('');
};