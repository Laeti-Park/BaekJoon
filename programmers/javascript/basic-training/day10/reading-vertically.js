// https://school.programmers.co.kr/learn/courses/30/lessons/181904

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

const solution = (my_string, m, c) => {
  const array = [];
  let answer = '';
  for (let i = 0; i < my_string.length; i += m) {
    array.push(my_string.slice(i, i + m));
  }

  for (let i = 0; i < array.length; i++) {
    answer += (array[i])[c - 1];
  }

  return answer;
};