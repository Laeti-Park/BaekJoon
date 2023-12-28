// https://school.programmers.co.kr/learn/courses/30/lessons/181935

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


const solution = (n) => {
  let answer = 0;
  if (n % 2 === 0) {
    for (let i = n; i >= 0; i -= 2) {
      answer += i * i;
    }
  } else {
    for (let i = n; i >= 0; i -= 2) {
      answer += i;
    }
  }

  return answer;
};