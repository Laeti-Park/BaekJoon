// https://school.programmers.co.kr/learn/courses/30/lessons/181875

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myString = '';
let alp = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    myString = line;
  } else {
    alp = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(myString, pat);
  console.log(answer);
});

const solution = (myString, alp) => {
  let array = '';
  for (let i = 0; i < myString.length; i++) {
    if (myString[i].includes(alp)) {
      array += myString[i].toUpperCase();
    } else {
      array += myString[i];
    }
  }

  return array;
};