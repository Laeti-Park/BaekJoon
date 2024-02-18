// https://school.programmers.co.kr/learn/courses/30/lessons/181887

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
  const answer = solution(num_list);
  console.log(answer);
});

const solution = num_list => {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      even += num_list[i];
    } else {
      odd += num_list[i];
    }
  }

  return even > odd ? even : odd;
};