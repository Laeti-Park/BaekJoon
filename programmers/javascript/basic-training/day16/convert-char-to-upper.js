// https://school.programmers.co.kr/learn/courses/30/lessons/181874

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
  let array = '';
  for (let i = 0; i < myString.length; i++) {
    if (myString[i].includes('a')) {
      array += myString[i].toUpperCase();
    } else if (!myString[i].includes('A')) {
      array += myString[i].toLowerCase();
    } else {
      array += myString[i];
    }
  }

  return array;
};