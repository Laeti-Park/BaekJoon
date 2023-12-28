// https://school.programmers.co.kr/learn/courses/30/lessons/181934

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  const answer = solution(Number(input));
  console.log(answer);
});

const solution = (ineq, eq, n, m) => {
  let answer = 1;
  if (ineq === '<') {
    answer = n <= m ? 1 : 0;
  } else {
    answer = n >= m ? 1 : 0;
  }
  if (answer === 1) {
    if (eq === '!=') {
      answer = n === m ? 0 : 1;
    }
  }

  return answer;
};