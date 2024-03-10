// https://school.programmers.co.kr/learn/courses/30/lessons/181878

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myString = '';
let pat = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    myString = line;
  } else {
    pat = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(myString, pat);
  console.log(answer);
});

const solution = (myString, pat) => {
  if (myString.toLowerCase().includes(pat.toLowerCase())) {
    return 1;
  } else {
    return 0;
  }
};