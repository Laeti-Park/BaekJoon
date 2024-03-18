// https://school.programmers.co.kr/learn/courses/30/lessons/181862

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myStr = [];

rl.on('line', (line) => {
  myStr = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(myStr);
  console.log(answer);
});

const solution = myStr => {
  let answer = [];
  let str = '';
  for (let i = 0; i < myStr.length; i++) {
    if (!['a', 'b', 'c'].includes(myStr[i])) {
      str += myStr[i];
    } else {
      if (str !== '') {
        answer.push(str);
      }
      str = '';
    }
  }
  if (str !== '') {
    answer.push(str);
  }

  return answer.length === 0 ? ["EMPTY"] : answer;
};