// https://school.programmers.co.kr/learn/courses/30/lessons/181884

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];
let n = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    numbers = line.split(' ').map(Number);
  } else {
    n = Number(line);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(numbers, n);
  console.log(answer);
});

const solution = (numbers, n) => {
  let sum = 0;
  let count = 0;
  while (count <= numbers.length && sum <= n) {
    console.log(count, sum);
    sum += numbers[count];
    count++;
  }

  return sum;
};