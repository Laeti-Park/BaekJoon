// https://school.programmers.co.kr/learn/courses/30/lessons/181880

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = '';

rl.on('line', (line) => {
  arr = line.split(' ').map(Number);
  rl.close();
}).on('close', () => {
  const answer = solution(arr);
  console.log(answer);
});

const solution = num_list => {
  let count = 0;
  for (let num of num_list) {
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = (num - 1) / 2;
      }
      count++;
    }
  }

  return count;
};