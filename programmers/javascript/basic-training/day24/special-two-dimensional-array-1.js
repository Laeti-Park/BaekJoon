// https://school.programmers.co.kr/learn/courses/30/lessons/181833

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = [];

rl.on('line', (line) => {
  n = line.split(' ');
  n = n.map(item => {
    return item.split(',').map(Number);
  });
}).on('close', () => {
  const answer = solution(order);
  console.log(answer);
});

const solution = n => {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(j === i ? 1 : 0);
    }
    answer.push(arr);
  }

  return answer;
};