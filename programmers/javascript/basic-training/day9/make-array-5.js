// https://school.programmers.co.kr/learn/courses/30/lessons/181912

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let intStrs = '';
let input = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    intStrs = line.split(' ');
  } else {
    input = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(intStrs, input[0], input[1], input[2]);
  console.log(answer);
});

const solution = (intStrs, k, s, l) => {
  let answer = [];
  intStrs.map(item => {
    const array = item.split('');
    let number = '';
    for (let i = s; i < s + l; i++) {
      number += array[i];
    }
    console.log(number);
    if (Number(number) > k) {
      answer.push(number);
    }
  });

  return answer.map(Number);
};