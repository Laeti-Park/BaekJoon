// https://school.programmers.co.kr/learn/courses/30/lessons/181858

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let k = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ').map(Number);
  } else {
    k = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(arr, k);
  console.log(answer);
});

const solution = (arr, k) => {
  let answer = [];
  let set = [...new Set(arr)];

  for (let i = 0; i < k; i++) {
    if (set[i] !== undefined) {
      answer.push(set[i]);
    } else {
      answer.push(-1);
    }
  }

  return answer;
};