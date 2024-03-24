// https://school.programmers.co.kr/learn/courses/30/lessons/181839

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let date1 = [];
let date2 = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    date1 = Number(line);
  } else {
    date2 = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(date1, date2);
  console.log(answer);
});

const solution = (date1, date2) => {
  return new Date(date1[0], date1[1], date1[2]) < new Date(date2[0], date2[1], date2[2]) ? 1 : 0;
};