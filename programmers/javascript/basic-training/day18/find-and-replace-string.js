// https://school.programmers.co.kr/learn/courses/30/lessons/181864

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
  const reverseString = myString.split('').map((char) => char === 'A' ? 'B' : 'A').join('');
  for (let i = 0; i <= reverseString.length - pat.length; i++) {
    if (pat === reverseString.substring(i, i + pat.length)) {
      return 1;
    }
  }

  return 0;
};