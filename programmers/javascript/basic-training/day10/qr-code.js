// https://school.programmers.co.kr/learn/courses/30/lessons/181903

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let code = '';
let input = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    input = line.split(' ').map(Number);
  } else {
    code = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input[0], input[1], code);
  console.log(answer);
});

const solution = (q, r, code) => {
  let answer = '';
  for (let i = r; i < code.length; i += q) {
    answer += code[i];
  }

  return answer;
};