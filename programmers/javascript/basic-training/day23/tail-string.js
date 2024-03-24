// https://school.programmers.co.kr/learn/courses/30/lessons/181841

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let strList = [];
let ex = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    strList = line.split(' ');
  } else {
    ex = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(strList, ex);
  console.log(answer);
});

const solution = (strList, ex) => {
  let answer = [...strList];
  let count = 0;
  while (answer[count]) {
    if (answer[count].includes(ex)) {
      answer.splice(count, 1);
    } else {
      count++;
    }
  }

  return answer.join('');
};