// https://school.programmers.co.kr/learn/courses/30/lessons/181914

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
let queries = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    input = line;
  } else {
    queries = line.split(' ');
    queries = queries.map(item => {
      return item.split('').map(Number);
    });
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input, queries);
  console.log(answer);
});

const solution = number => {
  const array = number.split('').map(Number);
  let sum = 0
  array.map(item => sum += item);

  return Number(sum) % 9;
};