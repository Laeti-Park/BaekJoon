// https://school.programmers.co.kr/learn/courses/30/lessons/181906

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let my_string = '';
let is_prefix = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    my_string = line;
  } else {
    is_prefix = line;
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(my_string, is_prefix);
  console.log(answer);
});

const solution = (my_string, is_prefix) => {
  const prefix = my_string.slice(0, is_prefix.length);
  return is_prefix.length <= my_string.length && prefix.includes(is_prefix) ? 1 : 0;
};