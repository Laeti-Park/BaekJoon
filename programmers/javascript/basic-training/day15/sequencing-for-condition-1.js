// https://school.programmers.co.kr/learn/courses/30/lessons/181882

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = '';

rl.on('line', (line) => {
  arr = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = arr => {
  let answer = [];
  for (const item of arr) {
    if (item >= 50 && item % 2 === 0) {
      answer.push(item / 2);
    } else if (item < 50 && item % 2 === 1) {
      answer.push(item * 2);
    } else {
      answer.push(item);
    }
  }

  return answer;
};