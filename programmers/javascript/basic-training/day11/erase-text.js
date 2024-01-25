// https://school.programmers.co.kr/learn/courses/30/lessons/181900

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let my_string = '';
let n = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    my_string = line;
  } else {
    n = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(my_string, n);
  console.log(answer);
});

const solution = (my_string, indices) => {
  let answer = [...my_string];
  let sortedIndices = indices.sort((a, b) => a - b);
  console.log(sortedIndices);
  for (let index in sortedIndices) {
    answer.splice(sortedIndices[index] - index, 1);
  }

  return answer.join('');
};