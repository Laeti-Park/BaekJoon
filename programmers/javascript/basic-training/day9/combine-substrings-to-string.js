// https://school.programmers.co.kr/learn/courses/30/lessons/181911

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let my_strings = [];
let parts = [];
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    my_strings = line.split(' ');
  } else {
    parts = line.split(' ');
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(my_strings, parts.map(item => item.split(',').map(Number)));
  console.log(answer);
});

const solution = (my_strings, parts) => {
  let answer = [];
  for (let i = 0; i < parts.length; i++) {
    answer.push(my_strings[i].slice(parts[i][0], parts[i][1]+1));
  }
  return answer.join('');
};