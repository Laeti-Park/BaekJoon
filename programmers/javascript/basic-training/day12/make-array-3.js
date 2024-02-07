// https://school.programmers.co.kr/learn/courses/30/lessons/181895

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let intervals = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ').map(Number);
  } else {
    intervals = line.split(' ').map(
      item => item.split(','),
    );
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(arr, intervals);
  console.log(answer);
});

const solution = (arr, intervals) => {
  let answer = [];
  intervals.map(interval => {
    answer.push(...arr.slice(interval[0], interval[1] + 1));
  });

  return answer;
};