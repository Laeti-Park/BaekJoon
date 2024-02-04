// https://school.programmers.co.kr/learn/courses/30/lessons/181934

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  const answer = solution(input[0], input[1], Number(input[2]),Number(input[3]));
  console.log(answer);
});

const solution = (ineq, eq, n, m) => {
  let answer;
  if (ineq === '<') {
    answer = n <= m ? 1 : 0;
  } else {
    answer = n >= m ? 1 : 0;
  }

  return answer;
};