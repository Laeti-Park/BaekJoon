// https://school.programmers.co.kr/learn/courses/30/lessons/181857

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on('line', (line) => {
  arr = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = arr => {
  let length = arr.length;
  let answer = arr;
  let count = 0;

  while (true) {
    length = Math.round(length / 2);

    if (length === 1) {
      break;
    }
    count++;
  }

  if (2 ** count < arr.length) {
    for (let i = arr.length; i < 2 ** (count + 1); i++) {
      answer.push(0);
    }
  }

  return answer;
};