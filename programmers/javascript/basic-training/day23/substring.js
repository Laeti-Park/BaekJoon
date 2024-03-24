// https://school.programmers.co.kr/learn/courses/30/lessons/181842

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str1 = '';
let str2 = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    str1 = line;
  } else {
    str2 = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(str1, str2);
  console.log(answer);
});

const solution = (str1, str2) => {
  if (!str2.includes(str1)) {
    return 0;
  }

  return 1;
};