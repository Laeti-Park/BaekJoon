// https://school.programmers.co.kr/learn/courses/30/lessons/181943

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  const answer = solution(input[0], input[1], Number(input[2]));
  console.log(answer);
});

const solution = (my_string, overwrite_string, s) => {
  const str = [...my_string];
  str.splice(s, overwrite_string.length, overwrite_string);
  return str.join('');
};