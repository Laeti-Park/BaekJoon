// https://school.programmers.co.kr/learn/courses/30/lessons/181940

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ');
}).on('close', () => {
  const answer = solution(input[0], input[1]);
  console.log(answer);
});

function solution(my_string, k) {
  let answer = '';
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }

  return answer;
}