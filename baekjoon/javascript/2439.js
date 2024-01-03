// https://www.acmicpc.net/problem/2439

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

const solution = number => {
  let answer = '';
  for (let i = 0; i < number; i++) {
    for (let j = i + 1; j < number; j++) {
      answer += ' ';
    }
    for (let j = number - i - 1; j < number; j++) {
      answer += '*';
    }
    answer += '\n';
  }

  return answer;
};