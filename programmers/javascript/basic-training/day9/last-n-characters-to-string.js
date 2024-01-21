// https://school.programmers.co.kr/learn/courses/30/lessons/181910

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let my_string = '';
let n = 0;
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    my_string = line;
  } else {
    n = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(my_string, Number(n));
  console.log(answer);
});

const solution = (my_string, n) => {
  return my_string.slice(my_string.length - n);
};