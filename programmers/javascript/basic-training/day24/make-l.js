// https://school.programmers.co.kr/learn/courses/30/lessons/181834

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myString = [];

rl.on('line', (line) => {
  myString = line;
  rl.close();
}).on('close', () => {
  const answer = solution(myString);
  console.log(answer);
});

const solution = myString => {
  let answer = '';

  for (let i = 0; i < myString.length; i++) {
    if (myString.codePointAt(i) < 'l'.codePointAt(0)) {
      answer += 'l';
    } else {
      answer += myString[i];
    }
  }

  return answer;
};