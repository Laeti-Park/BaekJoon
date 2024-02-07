// https://school.programmers.co.kr/learn/courses/30/lessons/181896

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(input);
  console.log(answer);
});

const solution = (num_list) => {
  let count = 0;
  while (true) {
    if (num_list[count] < 0) {
      return count;
    }
    if (count > num_list.length) {
      return -1;
    }
    count++;
  }
};