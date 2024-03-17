// https://school.programmers.co.kr/learn/courses/30/lessons/181866

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myString = '';

rl.on('line', (line) => {
  myString = line;
  rl.close();
}).on('close', () => {
  const answer = solution(myString);
  console.log(answer);
});

const solution = myString => {
  let answer = [];
  let str = '';

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] !== 'x') {
      str += myString[i];
    } else {
      if (str !== '') {
        answer.push(str);
        str = '';
      }
    }
  }
  if (str !== '') {
    answer.push(str);
  }

  return answer.sort();
};