// https://school.programmers.co.kr/learn/courses/30/lessons/86491

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

let input = [];
let n = 0;
let count = 0;

rl.on('line', line => {
  if (count === 0) {
    n = line;
  } else {
    input.push(line.split(' ').map(Number));
  }
  count++;

  if (count > n) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = (sizes) => {
  let sortedArray = sizes.map(innerList => innerList.slice().sort((a, b) => a - b));
  let maxWidth = 0;
  let maxHeight = 0;

  for (const item of sortedArray) {
    maxWidth = maxWidth < item[0] ? item[0] : maxWidth;
    maxHeight = maxHeight < item[1] ? item[1] : maxHeight;
  }

  return maxWidth * maxHeight;
};