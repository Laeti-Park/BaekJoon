// https://school.programmers.co.kr/learn/courses/30/lessons/181835

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let k = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ');
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
  return arr.map(num => k % 2 === 0 ? num + k : num * k);
};