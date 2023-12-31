// https://school.programmers.co.kr/learn/courses/30/lessons/181932

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
  const answer = solution(input);
  console.log(answer);
});

const solution = (code) => {
  let answer = '';
  let mode = 0;
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '1') {
      mode = (mode + 1) % 2;
    } else if (mode === 0 && (i + 1) % 2 === 1) {
      answer += code[i];
    } else if (mode === 1 && (i + 1) % 2 === 0) {
      answer += code[i];
    }
  }

  if (answer !== '') {
    return answer;
  } else {
    return 'EMPTY';
  }
};