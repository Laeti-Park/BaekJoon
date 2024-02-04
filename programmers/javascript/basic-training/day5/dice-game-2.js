// https://school.programmers.co.kr/learn/courses/30/lessons/181930

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input[0], input[1], input[2]);
  console.log(answer);
});

const solution = (a, b, c) => {
  let number = {};
  let answer;
  number[a] = 1;
  number[b] = ++number[b] || 1;
  number[c] = ++number[c] || 1;

  let maxValue = -Infinity;

  for (let key in number) {
    let value = number[key];
    if (value > maxValue) {
      maxValue = value;
    }
  }
  if (maxValue === 3) {
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  } else if (maxValue === 2) {
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else {
    answer = (a + b + c);
  }

  return answer;
};