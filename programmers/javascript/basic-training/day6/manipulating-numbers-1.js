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

const solution = (n, control) => {
  let answer = n;
  const strArray = control.split('');
  strArray.map(item => {
    if (item === 'w') {
      answer += 1;
    } else if (item === 's') {
      answer -= 1;
    } else if (item === 'd') {
      answer += 10;
    } else if (item === 'a') {
      answer -= 10;
    }
  });

  return answer;
};