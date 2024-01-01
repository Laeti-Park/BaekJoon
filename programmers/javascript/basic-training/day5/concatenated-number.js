// https://school.programmers.co.kr/learn/courses/30/lessons/181929

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
  let odd = '';
  let even = '';

  num_list.map(item => {
    if (item % 2 === 0) {
      even += item;
    } else {
      odd += item;
    }
  });

  return Number(odd) + Number(even);
};