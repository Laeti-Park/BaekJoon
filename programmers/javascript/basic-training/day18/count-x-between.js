// https://school.programmers.co.kr/learn/courses/30/lessons/181867

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
  let count = 0;

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] !== 'x') {
      count++;
    } else {
      answer.push(count);
      count = 0;
    }
  }
  answer.push(count);

  return answer;
};