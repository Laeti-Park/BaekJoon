// https://school.programmers.co.kr/learn/courses/30/lessons/181843

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myString = '';
let target = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    myString = line.split(' ').map(Number);
  } else {
    target = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(myString, target);
  console.log(answer);
});

const solution = (myString, target) => {
  return myString.includes(target) ? 1 : 0;
};