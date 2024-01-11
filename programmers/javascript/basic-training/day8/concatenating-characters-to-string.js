// https://school.programmers.co.kr/learn/courses/30/lessons/181915

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
let index = '';
let count = 0;

rl.on('line', (line) => {
  if (count === 0) {
    input = line;
  } else {
    index = line.split(' ').map(Number);
  }
  count++;
  if (count > 1) {
    rl.close();
  }
}).on('close', () => {
  const answer = solution(input, index);
  console.log(answer);
});

const solution = (my_string, index_list) => {
  let answer = '';
  const string = my_string.split('');
  for (const item of index_list) {
    answer += string[item];
  }

  return answer;
};