// https://school.programmers.co.kr/learn/courses/30/lessons/181855

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
  arr = line.split(' ');
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = (strArr) => {
  const arr = {};
  strArr.map(str => {
    if (!arr[str.length]) {
      arr[str.length] = [];
    }
    arr[str.length].push(str);
  });
  return Math.max(...Object.values(arr).map(arr => arr.length));
};