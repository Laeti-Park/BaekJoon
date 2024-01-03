// https://school.programmers.co.kr/learn/courses/30/lessons/181926

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = (numLog) => {
  let answer = '';
  for (let i = 1; i < numLog.length; i++) {
    const currNum = numLog[i];
    const prevNum = numLog[i - 1];
    if (currNum - prevNum === 1 && currNum > prevNum) {
      answer += 'w';
    } else if (currNum - prevNum === -1) {
      answer += 's';
    } else if (currNum - prevNum === 10) {
      answer += 'd';
    } else if (currNum - prevNum === -10) {
      answer += 'a';
    }
  }

  return answer;
};