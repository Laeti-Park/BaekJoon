// https://school.programmers.co.kr/learn/courses/30/lessons/181854

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let n = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ').map(Number);
  } else {
    n = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(arr, n);
  console.log(answer);
});

const solution = (arr, n) => {
  if (arr.length % 2 === 0) {
    return arr.map((item, index) => index % 2 === 0 ? item : item + n);
  } else {
    return arr.map((item, index) => index % 2 === 1 ? item : item + n);
  }
};