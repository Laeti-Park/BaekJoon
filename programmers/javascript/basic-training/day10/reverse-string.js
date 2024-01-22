// https://school.programmers.co.kr/learn/courses/30/lessons/181905

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let my_string = '';
let input = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    my_string = line;
  } else {
    input = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(my_string, input[0], input[1]);
  console.log(answer);
});

const solution = (my_string, s, e) => {
  const prefix = my_string.slice(0, s);
  const interval = my_string.slice(s, e + 1);
  let reverse = '';
  for (let i = e - s; i >= 0; i--) {
    reverse += interval[i];
  }
  const suffix = my_string.slice(e + 1);

  return prefix + reverse + suffix;
};