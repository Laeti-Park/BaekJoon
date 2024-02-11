// https://school.programmers.co.kr/learn/courses/30/lessons/181888

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num_list = [];
let n = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    num_list = line.split(' ').map(Number);
  } else {
    n = Number(line)
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input, queries);
  console.log(answer);
});

const solution = (num_list, n) => {
  let answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i])
  }

  return answer
};