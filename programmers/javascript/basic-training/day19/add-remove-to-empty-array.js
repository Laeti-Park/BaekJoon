// https://school.programmers.co.kr/learn/courses/30/lessons/181860

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let flag = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    arr = line.split(' ').map(Number);
  } else {
    flag = line.split(' ').map(Number).map(item => item === 1);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(arr, flag);
  console.log(answer);
});

const solution = (arr, flag) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
       for (let j = 0; j < arr[i] * 2; j++) {
         answer.push(arr[i]);
       }
    } else {
      answer.splice(answer.length - arr[i], answer.length);
    }
  }

  return answer;
};