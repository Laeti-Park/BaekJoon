// https://school.programmers.co.kr/learn/courses/30/lessons/181926

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number = 0;
let input = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    number = Number(line);
  } else {
    input = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(number, input);
  console.log(answer);
});

const solution = (numLog) => {
  let answer = '';
  for (let i = 1; i < numLog.length; i++) {
    const currNum = numLog[i];
    const prevNum = numLog[i - 1];
    if (currNum - prevNum === 1) {
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