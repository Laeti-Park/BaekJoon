// https://school.programmers.co.kr/learn/courses/30/lessons/181890

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num_list = [];

rl.on('line', (line) => {
  num_list = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input, queries);
  console.log(answer);
});

const solution = str_list => {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') {
      return str_list.slice(0, i);
    } else if (str_list[i] === 'r' && i < str_list.length) {
      return str_list.slice(i + 1);
    }
  }
  return [];
};