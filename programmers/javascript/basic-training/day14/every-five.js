// https://school.programmers.co.kr/learn/courses/30/lessons/181886

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let names = [];

rl.on('line', (line) => {
  names = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(names);
  console.log(answer);
});

const solution = names => {
  let answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
};