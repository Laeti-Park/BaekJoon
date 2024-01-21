// https://school.programmers.co.kr/learn/courses/30/lessons/181908

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let my_string = '';
let is_suffix = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    my_string = line;
  } else {
    is_suffix = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(my_string, is_suffix);
  console.log(answer);
});

const solution = (my_string, is_suffix) => {
  const suffix = my_string.slice(my_string.length - is_suffix.length);
  return suffix.includes(is_suffix) ? 1 : 0;
};